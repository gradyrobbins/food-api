# Food API
## Book3 - chapters 9 AND 10

### ch 9 Practice using Postman to perform GET, POST, PUT, and DELETE operations on your new food API.

1. [x] GET all curry dishes. Use the filter feature.
1. [x] Use POST to create some of your favorite foods.
1. [x] Perform a GET operation using the q URL parameter to find any entries that have the pattern of ol in them.
1. [x] GET all foods and sort them by ethnicity.
1. [x] Delete a food from the API by using the DELETE method, and putting in the URL of a specific resource (e.g. http://localhost:8008/food/2)

# Chapter 9 practice complete

### ch 10 Practice: Displaying Foods
Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.

1. [x] Create a DOM element in your index.html with a class of foodList.
1. [x] Create a function which returns a string template. The template is the HTML representation for a food item.
1. [x] Create a function that inserts an HTML representation of a food into the DOM
2. [x] Use Flexbox row direction so that you have a horizontal list of items.

### Chapter 10 practice: Fetching Other People's Data:
For this exercise, you will be adding barcodes to your food products, and using another, 3rd-party API to query more information about each product and display it in the DOM. That's right! You don't have to be stuck just messing around with your own data; there's a whole world of information out there for you fetch.

1. [x] use Open Food Facts API- Visit the site and use the search feature to find all foods matching the name property of each of the foods in your food API. For example, search for "Green curry" and see the how many matches there are.

Next, click on one of the search results and get the barcode for the product. It's at the top, right beneath the product name.
2. [x] Create a new barcode key for each of the items in your API, and provide the correct barcode value that you found in your search.
3. [x] Your job is to query the Open Food Facts API for each of your products, and list the following additional information.

Ingredients
Country of origin
Calories per serving
Fat per serving
Sugar per serving
Helpful hints: You will need to use the forEach array method to iterate your foods. Inside that forEach, you will need to perform another fetch to get the additional information. The barcode value must be interpolated inside the URL for the inner fetch.

