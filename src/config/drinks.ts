import { Drink } from "../models/Drink";
import { VODKA, ORANGE_JUICE, RUM, COKE, LIME_JUICE, TEQUILA, CRANBERRY, TEST } from "./ingredients";

const Drinks: Drink[] = [
    {
        id: 0,
        name: 'Screwdriver',
        image: 'screwdriver.jpg',
        ingredients: [
            {
                base: VODKA,
                ounces: 2
            },
            {
                base: ORANGE_JUICE,
                ounces: 3
            }
        ]
    },
    {
        id: 1,
        name: 'Rum and Coke',
        image: 'rum_coke.jpg',
        ingredients: [
            {
                base: RUM,
                ounces: 1.6
            },
            {
                base: COKE,
                ounces: 4
            },
            {
                base: LIME_JUICE,
                ounces: 0.6
            }
        ]
    },
    {
        id: 2,
        name: 'Tequila Sunrise',
        image: 'tequila_sunrise.jpg',
        ingredients: [
            {
                base: TEQUILA,
                ounces: 1.5
            },
            {
                base: ORANGE_JUICE,
                ounces: 3
            }
        ]
    },
    {
        id: 3,
        name: 'Long Island',
        image: 'long_island.jpg',
        ingredients: [
            {
                base: VODKA,
                ounces: 0.5
            },
            {
                base: RUM,
                ounces: 0.5
            },
            {
                base: TEQUILA,
                ounces: 0.5
            },
            {
                base: LIME_JUICE,
                ounces: 1
            },
            {
                base: COKE,
                ounces: 1
            } // TODO: add gin, triple sec
        ]
    },
    {
        id: 4,
        name: 'Margarita',
        image: 'marg.jpg',
        ingredients: [
            {
                base: TEQUILA,
                ounces: 1.5
            },
            {
                base: LIME_JUICE,
                ounces: 0.75
            }
        ] // TODO: add triple sec 1 oz
    },
    {
        id: 5,
        name: 'Orange Margarita',
        image: 'orange_marg.jpg',
        ingredients: [
            {
                base: TEQUILA,
                ounces: 1.5
            },
            {
                base: ORANGE_JUICE,
                ounces: 1.5
            },
            {
                base: LIME_JUICE,
                ounces: 1
            }
        ] // TODO: add triple sec 1 oz
    },
    {
        id: 6,
        name: 'Rum and Cranberry',
        image: 'rum_cran.jpg',
        ingredients: [
            {
                base: RUM,
                ounces: 1.5
            },
            {
                base: CRANBERRY,
                ounces: 1.5
            },
            {
                base: LIME_JUICE,
                ounces: 0.5
            }
        ] // TODO: add simple syrup
    },
    {
        id: 7,
        name: 'Vodka Cranberry',
        image: 'vodka_cran.jpg',
        ingredients: [
            {
                base: VODKA,
                ounces: 1
            },
            {
                base: CRANBERRY,
                ounces: 3
            }
        ] // TODO: add simple syrup
    },
    {
        id: 8,
        name: 'Cranberry Margarita',
        image: 'cranberry_marg.jpg',
        ingredients: [
            {
                base: TEQUILA,
                ounces: 1.5
            },
            {
                base: CRANBERRY,
                ounces: 1.5
            },
            {
                base: LIME_JUICE,
                ounces: 0.5
            }

        ] // TODO: add simple syrup 0.5, 1 oz cointreau
    },
    {
        id: 0.1,
        name: 'Vodka Shot',
        image: '',
        ingredients: [
            {
                base: VODKA,
                ounces: 1
            }

        ]
    },
    {
        id: 0.2,
        name: 'Orange Juice',
        image: '',
        ingredients: [
            {
                base: ORANGE_JUICE,
                ounces: 1
            }

        ]
    },
    {
        id: 0.3,
        name: 'Tequila Shot',
        image: '',
        ingredients: [
            {
                base: TEQUILA,
                ounces: 1
            }

        ]
    },
    {
        id: 0.4,
        name: 'Rum Shot',
        image: '',
        ingredients: [
            {
                base: RUM,
                ounces: 1
            }

        ]
    },
    {
        id: 0.5,
        name: 'Lime Juice',
        image: '',
        ingredients: [
            {
                base: LIME_JUICE,
                ounces: 1
            }

        ]
    },
    {
        id: 0.6,
        name: 'Coke',
        image: '',
        ingredients: [
            {
                base: COKE,
                ounces: 1
            }

        ]
    },
    {
        id: 0.7,
        name: 'Cranberry',
        image: '',
        ingredients: [
            {
                base: CRANBERRY,
                ounces: 1
            }

        ]
    },
    {
        id: 0.8,
        name: 'Test',
        image: '',
        ingredients: [
            {
                base: TEST,
                ounces: 1
            }

        ]
    }
]

export default Drinks;