import React from 'react';
import Pokecard from './Pokecard';

const Pokemons = props => {
  const {pokemons, userInput} = props;

  return (
    <ol className="pokelist">
      {pokemons
        .filter(pokemon => pokemon.name.toUpperCase()
        .includes(userInput.toUpperCase()))
        .map(pokemon => { return (
          <li className="pokemon-item" key={pokemon.id} id={pokemon.id}>
            <Pokecard 
              name={pokemon.name}/>
          </li>
        )})}
    </ol>
  );
};

export default Pokemons;