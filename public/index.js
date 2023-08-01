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
const randomDrink = document.getElementById('randomDrink');

randomDrink.addEventListener('click', () => {
    fetch(randomEndpoint)
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Internal Server Error'))
})

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