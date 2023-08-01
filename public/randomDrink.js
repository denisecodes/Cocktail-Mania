// Retrieve Random Drink Info

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    const decodedData = decodeURIComponent(dataParam);
    const drinkData = JSON.parse(decodedData).drinks[0];
    console.log('Parsed data:', drinkData);

    // Retrieve ingredients 
    const ingredients = {};
    for (let i = 1; i <= 15; i++) {
        const ingredientKey = `strIngredient${i}`;
        const ingredientAmount = `strMeasure${i}`;
        if (drinkData[ingredientKey]) {
            const ingredient = (drinkData[ingredientKey]);
            const amount = (drinkData[ingredientAmount]);
            ingredients[ingredient] = amount
        } else {
            break; // Stop the loop if ingredient not found
        }
    }

// Display the drink data on the frontend
    const drinkName = document.getElementById('drinkName');
    const drinkImage = document.getElementById('drinkImage');
    const drinkType = document.getElementById('drinkType');
    const ingredientsList = document.getElementById('ingredientsList');
    const instructions = document.getElementById('instructions')
    drinkName.innerHTML = drinkData.strDrink;
    drinkType.innerHTML = drinkData.strAlcoholic;
    drinkImage.setAttribute('src', drinkData.strDrinkThumb);
    instructions.innerHTML = drinkData.strInstructions
// Loop through the ingredientsData object
    for (const ingredient in ingredients) {
            // Create a new li element
            const listItem = document.createElement('li');
            // Set the text content of the li element to the ingredient and its measurement
            listItem.textContent = `${ingredients[ingredient]} ${ingredient}`;
            // Append the li element to the ingredients list ul
            ingredientsList.appendChild(listItem);
    }
});