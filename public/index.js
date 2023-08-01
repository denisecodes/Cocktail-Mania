// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//     if (menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');  
//     } else {
//         menu.classList.add('hidden');
//     }
// })

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


// drinkBtn.addEventListener('click', getCocktailInfo);

// fetch(randomEndpoint)
// .then(res => res.json())
// .then(data => {
// const dataAsString = JSON.stringify(data)
// const urlWithQueryParams = `randomDrink.html?data=${encodeURIComponent(dataAsString)}`;
// window.location.href = urlWithQueryParams;
// })
// .catch(error => console.log('Internal Server Error'))

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