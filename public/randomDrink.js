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

    console.log({ingredients})

// Display the drink data on the frontend
    const drinkName = document.getElementById('drinkName');
    const drinkImage = document.getElementById('drinkImage');
    const drinkType = document.getElementById('drinkType');
    drinkName.innerHTML = `${drinkData.strDrink}`;
    drinkType.innerHTML = `${drinkData.strAlcoholic}`;
    drinkImage.setAttribute('src', drinkData.strDrinkThumb);
});

{/* <h2>${drinkData.strDrink}</h2>
        <p>Type: ${drinkData.strAlcoholic}</p>
        <p>Ingredients: ${ingredients.join(', ')}</p>
        <p>Instructions: ${drinkData.strInstructions}</p> */}