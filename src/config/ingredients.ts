import { BaseIngredient } from "../models/Ingredient";

const VODKA: BaseIngredient = {
    id: 0,
    name: 'Vodka',
    image: '',
    pump_id: 0
}

const ORANGE_JUICE: BaseIngredient = {
    id: 1,
    name: 'Orange Juice',
    image: '',
    pump_id: 1
}

const Ingredients = [VODKA, ORANGE_JUICE];

export { VODKA, ORANGE_JUICE, Ingredients };