import React from 'react';

const Filter = props => {
  const {getUserInput, userInput} = props;
  
  return (
    <div className="input-container">
      <label></label>
      <input type="text" placeholder="Filtra pokemons por nombre..." onChange={getUserInput} value={userInput}></input>
    </div>
  );
};

export default Filter;