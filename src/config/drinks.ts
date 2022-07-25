import { Drink } from "../models/Drink";
import { VODKA, ORANGE_JUICE } from "./ingredients";

const Drinks: Drink[] = [
    {
        id: 0,
        name: 'Screwdriver',
        image: 'screwdriver.jpg',
        ingredients: [
            {
                base: VODKA,
                ounces: 1.5
            },
            {
                base: ORANGE_JUICE,
                ounces: 3
            }
        ]
    }
]

export default Drinks;