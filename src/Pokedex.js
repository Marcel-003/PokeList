import React, { useEffect, useState } from 'react';
import Pokemon from './Pokehome';
import './App.css';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => {
    // console.log("test");
    getPokemon();
  }, [query]);

  const getPokemon = async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
    const data = await response.json();    
    setPokemons(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

  return (
    <div className="Search">
      <form onSubmit={getSearch} className="search-form" style={{padding : 20}}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>   

      <div className="container">
        <div className="card-columns">
          {pokemons.map(pokemon => (      
            <Pokemon key={pokemon.name}
            pokemon={pokemon}       
            />
          ))}
        </div>
      </div> 
    </div>
  );
}

export default Pokedex;