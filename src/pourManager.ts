import { Server, Socket } from "socket.io";
import Drinks from "./config/drinks";
import { ERRORS, EVENTS } from "./constants/constants";
import { DrinkManager } from "./drinkManager";
import { Drink } from "./models/Drink";
import { IngredientStatus, PouringStatus } from "./models/PouringStatus";
import { DrinkEntry } from "./models/QueueEntry";
import { PinManager } from "./pinManager";
import { getDrinkById, getIngredientById, getPumpByIngredientId } from "./utils";

class PourManager {
    private drinkManager: DrinkManager;
    private pinManager = new PinManager();

    private activeDrink: Drink;
    private activePour: PouringStatus;
    private io: Server;

    private SECONDS_PER_OUNCE = 30;

    constructor() {
        this.drinkManager = new DrinkManager();
    }

    public setIO(io: Server) {
        this.io = io;
    }

    /**
     * Binds to a newly connected socket, and begins listening for new drink requests
     * @param socket 
     */
    public bind(socket: Socket) {
        socket.on(EVENTS.REQUEST_POUR, (req) => {
            console.log('Received new drink request');
            console.log(req);
 
            const data: DrinkEntry = JSON.parse(req);
            data.socket_id = socket.id;
            
            const drinkExists = getDrinkById(data.drink_id);

            // if the drink doesn't exist, then disconnect the client
            // this will force a reconnect 
            if (!drinkExists) { 
                socket.emit(EVENTS.ERROR, ERRORS.DRINK_DOES_NOT_EXIST);
                socket.disconnect(true);

                return;
            } 

            // validate each modifier is a valid ingredient
            if (data.modifiers) {
                const modifierCheck = {};

                for (let mod of data.modifiers) {
                    const id = mod.ingredient_id;

                    // make sure the ingredient exists
                    const ingredientExists = getIngredientById(id);
                    if (!ingredientExists) {
                        socket.emit(EVENTS.ERROR, ERRORS.INGR_DOES_NOT_EXIST);
                        socket.disconnect(true);
        
                        return;
                    }

                    // record number of modifiers
                    // if there are duplicate that's a bad request
                    if (modifierCheck[id]) {
                       
                        socket.emit(EVENTS.ERROR, ERRORS.DUPLICATE_MODIFIER);
                        return;

                    } else {
                        modifierCheck[id] = true;
                    }

                    // if they added 0 or less than 0 ounces, that shouldn't have been sent
                    if (mod.ounces <= 0) {
                        socket.emit(EVENTS.ERROR, ERRORS.INVALID_OUNCES)
                    }
                }
            }

            // TODO; remove this eventually
            if (this.drinkManager.size() !== 0) {
                return;
            }

            this.drinkManager.push(data);

            if (!this.activePour) {
                
                // TODO: add modifiers to ingredients here

                this.processDrinks();
            }
        });
    }

    private processDrinks() {
        if (this.activeDrink && this.activePour.pour_time_left === 0) {
            this.io.emit(EVENTS.POUR_FINISHED, JSON.stringify(this.activePour))
            this.activePour = undefined;
            this.activeDrink = undefined;

            this.drinkManager.pop();

            console.log('Drink finished');

            return;
        }

        // set the initial pour state 
        if (!this.activeDrink) {
            const id = this.drinkManager.top().drink_id;

            console.log('Starting a new pour');

            this.activeDrink = Object.assign({}, getDrinkById(id));
            console.log(this.activeDrink);

            const startIngredientStatus: IngredientStatus[] = [];
            let maxTime = 0;

            this.activeDrink.ingredients.forEach(ingredient => {
                const time = ingredient.ounces * this.SECONDS_PER_OUNCE;

                if (time > maxTime) {
                    maxTime = time;
                }

                const pumpId = getPumpByIngredientId(ingredient.base.id);
                this.pinManager.turnOn(pumpId);
 
                startIngredientStatus.push({
                    ingredient_id: ingredient.base.id,
                    time_left_sec: time
                });
            })

            this.activePour = <PouringStatus> {
                start_time: (new Date()).getTime(),
                max_pour_time_sec: maxTime,
                pour_time_left: maxTime,
                pour_status: startIngredientStatus,
                drink_id: id
            }

        } else {

            

            // pour state existing, let's use that
            this.activePour.pour_time_left = this.activePour.pour_time_left - 1;

            this.activePour.pour_status.map(currentStatus => {
                currentStatus.time_left_sec = currentStatus.time_left_sec > 1 ? currentStatus.time_left_sec - 1 : 0;

                const pumpId = getPumpByIngredientId(currentStatus.ingredient_id)

                if (currentStatus.time_left_sec === 0 && this.pinManager.isOn(pumpId)) {
                    this.pinManager.turnOff(pumpId);
                }

                return currentStatus;
            });

            console.log('Still pouring', this.activePour);
        }

        this.io.emit(EVENTS.POUR_IN_PROGRESS, JSON.stringify(this.activePour));

        setTimeout(() => {
            this.processDrinks()
        }, 1000);
    }
}

export default new PourManager();