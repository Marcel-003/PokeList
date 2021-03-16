import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Pokemon = ({ pokemon }) => {
    const map = useSelector(state => state.counter.caughtCounter);
    const [pokemons, setPokemons] = useState({
        pokemon: [],
        owned: 0
    });

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async() => {
        
        let owned;
        const response = await fetch (`${pokemon.url}`);
        const data = await response.json();
        if(map.has(data.id)) {
            owned = map.get(data.id).count;
        }  
        setPokemons({
            pokemon : data,
            owned: owned
        });
    }

    return ( 
        <div className = "card text-center mx-auto" style = {{ maxWidth: "18rem" }}>            
            {pokemons.pokemon.sprites ? <img className = "card-img-top"  src = {pokemons.pokemon.sprites.front_default} alt = "Card image cap" /> : (null)}
            <div className = "card-body" >        
                <h5 className = "card-title" > { pokemons.pokemon.name } </h5> 
                <p className = "card-text" > Owned: {pokemons.owned > 0 ? pokemons.owned : 0} </p>
                <Link to = { `/detail/${pokemons.pokemon.id}` }>        
                    <p href = "" className = "btn btn-primary" > Pokemon Detail </p> 
                </Link> 
            </div>        
         </div>
    );
}
export default Pokemon;