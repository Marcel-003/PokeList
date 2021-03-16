import React, { useEffect, useState } from 'react';
import PokemonSprites from '../components/PokemonSprites';
import Moves from '../components/Moves';

const PokemonDetail = ({match}) => {

    let url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`;
    const [pokemons, setPokemons] = useState([]);
    
    const getPokemon = async() => {
        const response = await fetch(url);
        const data = await response.json();        
        setPokemons(data);
    }

    useEffect(() => {
        getPokemon();
    }, [url]);
    

    return(
        <div className="card-group d-flex justify-content-center">            
            <PokemonSprites pokemon = {pokemons}/>            
            <Moves pokemon = {pokemons} />
        </div>               
    );  
}
export default PokemonDetail;