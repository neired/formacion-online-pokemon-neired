import React from 'react';
import './styles/App.scss';
import Pokemons from './components/Pokemons';
import Filter from './components/Filter';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
      <h1>Mi Pokedex</h1>
        <Filter/>
        <Pokemons/>
      </>
    );
  }
}

export default App;
