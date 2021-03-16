import React, { useEffect, useState } from 'react';
import Catch from './Catch';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Moves = ({pokemon}) => {
    console.log("masuk kok", pokemon);
    return(
        <div className="card" style={{maxWidth : "30rem"}}>                
                <div className="card-body">
                    <h5 className="card-title">Moves</h5>  
                    <ul className="list-group">            
                    {pokemon.moves && pokemon.moves.slice(0,4).map(move => (   
                    <li className="list-group-item" key={move.move.name}>
                        {move.move.name}
                    </li>                
                    ))}
                    </ul>
                    <p className="card-text">Not all the moves are on this list</p>
                    <a className="card-text" href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}#Learnset`}><small className="text-muted">Checkout the full moveset here</small></a>
                    <Catch pokemon = {pokemon}/>                                       
                </div>                
        </div>        
    );
}

export default Moves;