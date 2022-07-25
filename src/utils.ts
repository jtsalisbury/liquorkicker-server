import Drinks from "./config/drinks";
import { Ingredients } from "./config/ingredients";
import { Drink } from "./models/Drink";
import { BaseIngredient } from "./models/Ingredient";

/**
 * Attempts to get a drink by it's drink id
 * @param id 
 * @returns 
 */
export const getDrinkById = (id: number): Drink | undefined  => {
    return Drinks.filter(drink => drink.id === id)[0];
}

/**
 * Attempts to get an ingredient by it's id
 * @param id 
 * @returns 
 */
export const getIngredientById = (id: number): BaseIngredient | undefined => {
    return Ingredients.filter(ingr => ingr.id === id)[0];
}

export const getPumpByIngredientId = (id: number): number => {
    return getIngredientById(id).pump_id;
}