import React from 'react';
import './styles/App.scss';
import Pokemons from './components/Pokemons';
import Filter from './components/Filter';
import {getPokemons} from './services/api';
// import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : '',
      pokemons : []
    }
    this.getUserInput = this.getUserInput.bind(this);
  }


  getUserInput(event) {
    const userInput = event.currentTarget.value;
    this.setState({
      userInput : userInput
    })
  }

  paintPokemons() {
    getPokemons(this.state.userInput)
      .then(data => {
        this.setState({
          pokemons: data.results,
        });
      });
  }
  render() {
    return (
      <div className="app">
      <h1>Mi Pokedex</h1>
        <Filter 
          getUserInput={this.getUserInput} 
          userInput={this.state.userInput}/>
        <Pokemons/>
      </div>
    );
  }
}

export default App;
