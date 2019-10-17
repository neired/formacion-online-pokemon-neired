import React from 'react';
import Pokecard from './Pokecard';

const Pokemons = props => {
  const {pokemons, userInput} = props;

  return (
    <ol className="pokelist">
      {pokemons
        .filter(pokemon => pokemon.name.toUpperCase()
        .includes(userInput.toUpperCase()))
        .map((pokemon, index) => { return (
          <li className="pokemon-li" key={index}>
            <Pokecard 
              url={pokemon.url}
            />
          </li>
        )})}
    </ol>
  );
};

export default Pokemons;