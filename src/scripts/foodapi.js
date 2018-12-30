console.log("hello world foodapi.js");

// Grab a reference to the container on the DOM
let containerDiv = document.querySelector(".foodList");
// test
containerDiv.innerHTML = "Hello world -  container div";

// Create a function that inserts an HTML representation of a food into the DOM; take 1 argument-the food object
const addFoodToDom = (foodHTML) => {
    containerDiv.innerHTML += foodHTML;
};

// Create a function which returns a string template. The template is the HTML representation for a food item.  This is borrowed from Emily L. and Megan C.
const foodFactory = (foodObject) => {
    let HTMLfoodSection =
    `<section class="foodItemContainer">
        <h2>${foodObject.name}</h2>
        <p>${foodObject.type}</p>
        <p>${foodObject.ethnicity}</p>
        <p>${foodObject.country}</p>
        <p>${foodObject.ingredients}</p>
        <p>${foodObject.calories}</p>
        <p>${foodObject.sugar}</p>
        <p>${foodObject.fat}</p>
    </section>`;
    return HTMLfoodSection;
};



fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food);
            addFoodToDom(foodAsHTML);
        });
    });