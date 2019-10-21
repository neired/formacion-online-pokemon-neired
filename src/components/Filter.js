import React from 'react';
import './../styles/filter.scss';

const Filter = props => {
  const {getUserInput, userInput} = props;
  
  return (
    <>
      <label for="name"></label>
      <input className="input" type="text" name="name" placeholder="Filtra pokemons por nombre..." onChange={getUserInput} value={userInput}></input>
    </>
  );
};

export default Filter;