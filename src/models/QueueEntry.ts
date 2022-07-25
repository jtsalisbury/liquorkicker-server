interface DrinkModifier {
    ingredient_id: number;
    ounces: number;
}

export interface DrinkEntry {
    socket_id: string;
    drink_id: number;
    modifiers?: DrinkModifier[];
}
