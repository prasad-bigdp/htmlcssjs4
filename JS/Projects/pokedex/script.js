const mainDiv = document.getElementById('main')
const inputElement = document.getElementById('inp');
const searchButton = document.getElementById('btn');
function fetchData ()
{
    
      fetch(`https://pokeapi.co/api/v2/pokemon/${inputElement.value}`)
				.then(function (res) {
					console.log(res)
					if (res.status == 404) {
						mainDiv.textContent = "NOT FOUND"
					}
					return res.json()
				})
				.then(function (data) {
					console.log(data)
					displayData(data)
				})
				.catch(function (err) {
					console.log(err)
                })
    

   
   
    
}
inputElement.addEventListener('input',fetchData)
function displayData (data)
{
    mainDiv.textContent=""
    const image = document.createElement('img');
    image.src = data.sprites.front_shiny;
    image.alt = data.name
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details')
    const nameOfThePokemon = document.createElement('h2');
    nameOfThePokemon.textContent = data.name;
    const height = document.createElement('p');
    height.textContent ="Height: "+ data.height;
    const weight = document.createElement('p');
    weight.textContent = "Weight: " + data.weight;
    detailsDiv.append(nameOfThePokemon,height,weight)
    mainDiv.append(image,detailsDiv)
}