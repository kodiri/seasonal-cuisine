let dishes = require('./Data.js');

function getCountry(dishes) {
    return dishes.filter(dish => {
        return dish.country === "China";
    });
}

console.log(getCountry(dishes));
//returns all recipes for China

function getCourse(getCountry) {
    return getCountry(dishes).filter(dish => {
        return dish.course === "main";
    });
}
console.log(getCourse(getCountry));
// // returns an array of objects with all recipes for main courses from China

function getGlutenFree(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.gluten === false; 
        });
}
console.log(getGlutenFree(getCourse));
// returns [{China, main, gluten free}]

function getVegetarian(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.vegetarian === true; 
        });
}
console.log(getVegetarian(getCourse))
// returns [{China, main, vegetarian}]

function getVegan(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.vegan === true; 
        });
}

getVegan(getCourse)
// returns [{China, main, vegan}]



function getGlutenFree(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.gluten === false; 
        });
}
console.log(getGlutenFree(getCourse));
// returns [{China, main, gluten free}]

function getVegetarian(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.vegetarian === true; 
        });
}
console.log(getVegetarian(getCourse))
// returns [{China, main, vegetarian}]

function getVegan(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.vegan === true; 
        });
}

getVegan(getCourse)
// returns [{China, main, vegan}]

function getGlutenFree(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.gluten === false; 
        });
}
console.log(getGlutenFree(getCourse));
// returns [{China, main, gluten free}]

function getVegetarian(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.vegetarian === true; 
        });
}
console.log(getVegetarian(getCourse))
// returns [{China, main, vegetarian}]

function getVegan(getCourse) {
    return getCourse(getCountry)
        .filter(dish => {
            return dish.dietaryrestrictions.vegan === true; 
        });
}

getVegan(getCourse)
// returns [{China, main, vegan}]

