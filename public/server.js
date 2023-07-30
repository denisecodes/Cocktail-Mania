const searchEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const drinkChoice = 'margarita';

const params = new URLSearchParams({s: drinkChoice});
const searchUrl = `${searchEndpoint}?${params}`;

fetch(searchUrl)
    .then(res => {
        return res.json()
        })
    .then(data => console.log(data))
    .catch(error => console.log('Internal Server Error'))

const randomEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

fetch(randomEndpoint)
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Internal Server Error'))

