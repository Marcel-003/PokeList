import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PokemonSprites = ({pokemon}) => {
    console.log("masuk kok", pokemon);
    return(
        <div className="card" style={{maxWidth : "30rem"}}>
                {pokemon.sprites ? ( <img className="card-img-top" src={pokemon.sprites.front_default} alt="Card image cap"/> ) : (null)}
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    {pokemon.types && pokemon.types.map(type => (      
                    <p className="btn btn-secondary" key={type.type.name}>
                        {type.type.name}
                    </p> 
                    ))}
                    <p className="card-text">Pokedex ID : {pokemon.id}</p>
                    <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`} className="card-text"><small className="text-muted">Checkout the Bulbapedia page!</small></a>
                </div>
        </div>        
    );
}

export default PokemonSprites;