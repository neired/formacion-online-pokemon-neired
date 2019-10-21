import React from 'react';
import './../styles/filter.scss';
import PropTypes from 'prop-types';

const Filter = props => {
  const {getUserInput, userInput} = props;
  
  return (
    <>
      <label forhtml="name"></label>
      <input className="input" type="text" name="name" placeholder="Filtra pokemons por nombre..." onChange={getUserInput} value={userInput}></input>
    </>
  );
};

Filter.propTypes = {
  getUserInput: PropTypes.func,
  userInput: PropTypes.string,
}

export default Filter;