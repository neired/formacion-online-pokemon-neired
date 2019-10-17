import React from 'react';

class Pokecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonItem : {}
    }
  }

  componentDidMount(){
    fetch(this.props.url)
      .then(res=>res.json())
      .then(data => {
        this.setState({
          pokemonItem: data,
        });
      })
    };

  render() {
    const { pokemonItem } = this.state;

    return (
      <>
      <div className="pokemon-card">
        <div className="pokemon-card_top-container">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + pokemonItem.id + `.png`} alt={pokemonItem.name} className="pokemon-img"></img>
          <p className="pokemon-id">ID/{pokemonItem.id}</p>
        </div>
        <div className="pokemon-bottom-container">
          <h2 className="pokemon-name">{pokemonItem.name}</h2>
          <div className="pokemon-types_container">
            {/* <p>{pokemonItem.types.type.name}</p> */}
            <p className="pokemon-type"></p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Pokecard;