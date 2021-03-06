import React from 'react';
import Pokedex from './Pokedex';
import Pokedetail from './Pokedetail';
import MyPokemon from './MyPokemon';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App" style={{padding : 20}}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/detail/:id" component={Pokedetail} />    
        <Route path="/mypokemon" component={MyPokemon} />    
      </Switch>  
    </div>
    </Router>
  );
}

export default App;