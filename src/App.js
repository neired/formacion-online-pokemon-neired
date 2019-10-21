import React from 'react';
import './styles/App.scss';
import Pokemons from './components/Pokemons';
import Filter from './components/Filter';
import {getPokemons} from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : '',
      pokemons : []
    }
    this.getUserInput = this.getUserInput.bind(this);
  }

  componentDidMount() {
    this.paintPokemons();
  }

  getUserInput(event) {
    const userInput = event.currentTarget.value;
    this.setState({
      userInput : userInput
    })
  }

  paintPokemons() {
    getPokemons()
      .then(data => {
        const pokeArr = data.results.map(item => {
          return fetch(item.url)
            .then(response => response.json());
        });
        return Promise.all(pokeArr);
      })
      .then(info => {
        this.setState({
          pokemons: info,
        });
      })
  }

  render() {
    const {userInput, pokemons} = this.state;
    return (
      <div className="app">
      <h1 className="main-title">Mi Pokedex</h1>
        <Filter 
          getUserInput={this.getUserInput} 
          userInput={userInput}/>
        <Pokemons
          userInput={userInput}
          pokemons={pokemons}/>
      </div>
    );
  }
}

export default App;
