console.log("hello world foodapi.js");

// Grab a reference to the container on the DOM
let containerDiv = document.querySelector(".foodList");
// test it out:
// containerDiv.innerHTML = "Hello world -  container div";

// Create a function that inserts an HTML representation of a food into the DOM; take 1 argument-the food object
const addFoodToDom = (foodHTML) => {
    containerDiv.innerHTML += foodHTML;
};

// Create a function which returns a string template. The template is the HTML representation for a food item.  This is borrowed from Emily L. and Megan C.
const foodFactory = (food) => {
    let HTMLfoodSection =
    `<section class="foodItemContainer">
        <h2>${food.name}</h2>
        <p>${food.type}</p>
        <p>${food.ethnicity}</p>
        <p>${food.country}</p>
        <p>${food.ingredients}</p>
        <p>${food.calories}</p>
        <p>${food.sugar}</p>
        <p>${food.fat}</p>
    </section>`;
    return HTMLfoodSection;
};



// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food);
//             addFoodToDom(foodAsHTML);
//         });
//     });

//below fetch f(x)s courtesy Emily Lemmon:

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            console.log(food);
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients_text;
                    food.country = productInfo.product.countries;
                    food.sugar = productInfo.product.nutriments.sugars_serving;
                    food.fat = productInfo.product.nutriments.fat;
                    food.calories = productInfo.product.nutriments.energy_serving;
                    const foodAsHTML = foodFactory(food);
                    addFoodToDom(foodAsHTML);
                });
        });
    });
