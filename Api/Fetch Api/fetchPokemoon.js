const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

// method 1

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Désolé , on a pas trouver de ressources!');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data.id))
//   .catch(error => console.error(error));

// method 2: using async and await:
// create an async function:
fetchData();
async function fetchData() {
  try {
    const PokemonName = document
      .getElementById('PokemonName')
      .value.toLowerCase();
    const url2 = `https://pokeapi.co/api/v2/pokemon/${PokemonName}`;
    const response = await fetch(url2);
    if (!response.ok) {
      throw new Error('Sorry, the fetch operation not succeed!');
    }
    const data = await response.json();
    // console.log(data);
    // afficher les photo des Pokemon:
    const PokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('PokemonSprite');

    imgElement.src = PokemonSprite;
    imgElement.alt = PokemonName;
    imgElement.style.display = 'block';
    // display the json data in the div container:
    const container = document.getElementById('container');
    container.textContent = JSON.stringify(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
