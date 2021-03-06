import { BaseIngredient } from "../models/Ingredient";

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

const Ingredients = [VODKA, ORANGE_JUICE, TEQUILA, RUM, LIME_JUICE, COKE, CRANBERRY];

export { Ingredients, VODKA, ORANGE_JUICE, TEQUILA, RUM, LIME_JUICE, COKE, CRANBERRY };