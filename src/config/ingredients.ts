import { BaseIngredient } from "../models/Ingredient";

const PUMP_TO_PIN = {
    0: 17,//11,
    1: 27,//13,
    2: 22,//15,
    3: 23,//16,
    4: 6,//31,
    5: 13,//33,
    6: 19,//35,
    7: 26//37
}

const VODKA: BaseIngredient = {
    id: 0,
    name: 'Vodka',
    image: '',
    pump_id: 0
}

const TEQUILA: BaseIngredient = {
    id: 2,
    name: 'Tequila',
    image: '',
    pump_id: 2
}

const RUM: BaseIngredient = {
    id: 3,
    name: 'Rum',
    image: '',
    pump_id: 3
}





const ORANGE_JUICE: BaseIngredient = {
    id: 1,
    name: 'Orange Juice',
    image: '',
    pump_id: 1
}

const LIME_JUICE: BaseIngredient = {
    id: 4,
    name: 'Lime Juice',
    image: '',
    pump_id: 4
}

const COKE: BaseIngredient = {
    id: 5,
    name: 'Coke',
    image: '',
    pump_id: 5
}

const CRANBERRY: BaseIngredient = {
    id: 6,
    name: 'Cranberry',
    image: '',
    pump_id: 6
}

const LEMONADE: BaseIngredient = {
    id: 7,
    name: 'Lemonade',
    image: '',
    pump_id: 7
}

const Ingredients = [VODKA, ORANGE_JUICE, TEQUILA, RUM, LIME_JUICE, COKE, CRANBERRY, LEMONADE];

export { Ingredients, PUMP_TO_PIN, VODKA, ORANGE_JUICE, TEQUILA, RUM, LIME_JUICE, COKE, CRANBERRY, LEMONADE };