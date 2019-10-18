import React from 'react';

class Pokecard extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokemon-card">
        <div className="pokemon-card_top-container">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"></img>
          <p className="pokemon-id">ID/{pokemon.id}</p>
        </div>
        <div className="pokemon-bottom-container">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <div className="pokemon-types_container">
            <ul className="pokemon-type">
              {pokemon.types
                .map((type, index) => { return (
                  <li key={index}>{type.type.name}</li>
              )})}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;