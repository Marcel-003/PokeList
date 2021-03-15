import React, { useEffect, useState } from 'react';
import Pokemon from './Pokehome';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');

  useEffect(() => {    
    getPokemon();
  }, []);

  const getPokemon = async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
    const data = await response.json();    
    setPokemons(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  }

  const nextPage = async() => {
    const response = await fetch(next);
    const data = await response.json();    
    setPokemons(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  } 

  const prevPage = async() => {
    const response = await fetch(previous);
    const data = await response.json();    
    setPokemons(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  }   

  return (

    <div className="container">
      <div className="card-columns">
        {pokemons.map(pokemon => (      
          <Pokemon key={pokemon.name}
          pokemon={pokemon}       
          />
        ))}
      </div>
      <button className="btn btn-primary" onClick={prevPage} style={{margin: 10}}>Prev</button>
      <button className="btn btn-primary" onClick={nextPage}>Next</button>
    </div>     
  );
}

export default Pokedex;