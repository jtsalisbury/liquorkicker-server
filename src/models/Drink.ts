import { BaseIngredient } from "./Ingredient";

export interface Drink {
    id: number;
    name: string;
    image: string;
    ingredients: DrinkIngredient[];
}

export interface DrinkIngredient {
    base: BaseIngredient,
    ounces: number;
}