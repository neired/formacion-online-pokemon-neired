import React from 'react';
import Pokecard from './Pokecard';
import './../styles/pokemons.scss';

const Pokemons = props => {
  const {pokemons, userInput} = props;

  if (pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(userInput.toUpperCase())).length < 1) {
    return (
    <p>Ups! No hay pokemons con ese nombre</p>
    );
  } else {
  return (
    <ol className="pokelist">
      {pokemons
        .filter(pokemon => pokemon.name.toUpperCase()
        .includes(userInput.toUpperCase()))
        .map((pokemon) => { return (
          <li className="pokemon-li" key={pokemon.id}>
            <Pokecard 
              pokemon={pokemon}
              key={pokemon.id}
            />
          </li>
        )})}
    </ol>
  );}
};

export default Pokemons;