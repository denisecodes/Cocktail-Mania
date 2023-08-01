// Get a random drink

const randomEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const drinkBtn = document.getElementById('drinkBtn');

const getCocktailInfo = () => {
    fetch(randomEndpoint)
    .then(response => response.json())
    .then(data => {
        const drinkData = encodeURIComponent(JSON.stringify(data));
        const drinkDataParam = `randomDrink.html?data=${drinkData}`;
        window.location.href = drinkDataParam;
    })
    .catch(error => console.log('Internal Server Error'))}


drinkBtn.addEventListener('click', getCocktailInfo);

// Looking for user input

const searchEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', () => {
    const userInput = searchBar.value;
    const params = new URLSearchParams({s: userInput});
    const searchUrl = `${searchEndpoint}?${params}`;
    fetch(searchUrl)
    .then(res => {
        return res.json()
        })
    .then(data => {
        if (data.drinks === null) {
            alert('Drink cannot be found, please try again!')
        } else {
            console.log(data)
        }
        })
    .catch(error => console.log('Internal Server Error'))
})

searchBar.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const userInput = searchBar.value;
        const params = new URLSearchParams({s: userInput});
        const searchUrl = `${searchEndpoint}?${params}`;
        fetch(searchUrl)
        .then(res => {
            return res.json()
            })
        .then(data => {
            if (data.drinks === null) {
                alert('Drink cannot be found, please try again!')
            } else {
                console.log(data)
            }
            })
        .catch(error => console.log('Internal Server Error'))
    }
}); 