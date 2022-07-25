export interface IngredientStatus {
    ingredient_id: number;
    time_left_sec: number;
}

export interface PouringStatus {
    max_pour_time_sec: number;
    start_time: number;
    pour_time_left: number;
    pour_status: IngredientStatus[];
    drink_id: number;
}
