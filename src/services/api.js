const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25';

const getPokemons = () => {
  return fetch(ENDPOINT)
    .then(res=>res.json());
};

export {getPokemons};
