import { Gpio } from "onoff";
import { PUMP_TO_PIN } from "./config/ingredients";


export class PinManager {
    private pinStatus = {};
    private pinCache = {};

    constructor() {
        Object.keys(PUMP_TO_PIN).forEach(pump => {
            const pin = PUMP_TO_PIN[pump];

            console.log(`Setting up pump ${pump} on pin ${pin}`);

            this.pinCache[pump] = new Gpio(pin, 'out');
        });
    }

    public isOn = (pump): boolean => {
        return this.pinStatus[pump];
    }

    public turnOn = (pump) => {
        this.pinStatus[pump] = true;
        this.pinCache[pump].writeSync(1);
    }

    public turnOff = (pump) => {
        this.pinStatus[pump] = false;
        this.pinCache[pump].writeSync(0);
    }
}