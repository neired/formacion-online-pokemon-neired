const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25';

const getPokemons = (userInput) => {
  return fetch(ENDPOINT + userInput)
    .then(res=>res.json());
};

export {getPokemons};
