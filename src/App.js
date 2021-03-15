import React from 'react';
import Pokedex from './components/Pokedex';
import Pokedetail from './components/Pokedetail';
import MyPokemon from './components/MyPokemon';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App" style={{padding : 20}}>
      <Navbar />
      <Switch>
        <Route exact path ="/PokeList">
          <Redirect to = "/" />
        </Route>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/detail/:id" component={Pokedetail} />    
        <Route path="/mypokemon" component={MyPokemon} />    
      </Switch>  
    </div>
    </Router>
  );
}

export default App;