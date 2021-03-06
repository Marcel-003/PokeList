import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {catchMon, increment} from './actions/actions';
import store from './store/store';
import Nickname from './Nickname';

const PokemonDetail = ({match}) => {

    let nickname;
    let url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`;
    const [pokemons, setPokemons] = useState([]);
    const [catchSuccess, setCatchSuccess] = useState(false);
    const [catchButton, setCatchButton] = useState(false);
    // const mylist = useSelector(state => state.mylist);
    const dispatch = useDispatch();
    
    const getPokemon = async() => {
        const response = await fetch(url);
        const data = await response.json();        
        setPokemons(data);
        // console.log(data);
    }

    useEffect(() => {
        getPokemon();
    }, [url]);

    const Catch = () => {
        const min = 0;
        const max = 1;
        const rand = Math.floor(Math.random() * (max-min+1) + min);
        if(rand === 1)
        {
            setCatchSuccess(true);
            setCatchButton(true);
        }
        // console.log(catchSuccess, catchButton);        
    }

    if(catchSuccess) {
        nickname = <Nickname pokemon={pokemons} />
    }   
    
    // console.log(catchSuccess, catchButton);

    return(

        <div className="card-group d-flex justify-content-center">
            <div className="card" style={{maxWidth : "30rem"}}>
                {pokemons.sprites ? ( <img className="card-img-top" src={pokemons.sprites.front_default} alt="Card image cap"/> ) : (null)}
                <div className="card-body">
                    <h5 className="card-title">{pokemons.name}</h5>
                    {pokemons.types && pokemons.types.map(type => (      
                    <p className="btn btn-secondary" key={type.type.name}>
                        {type.type.name}
                    </p> 
                    ))}
                    <p className="card-text">Pokedex ID : {pokemons.id}</p>
                    <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemons.name}`} className="card-text"><small className="text-muted">Checkout the Bulbapedia page!</small></a>
                </div>
            </div>
            <div className="card" style={{maxWidth : "30rem"}}>                
                <div className="card-body">
                    <h5 className="card-title">Moves</h5>  
                    <ul className="list-group">            
                    {pokemons.moves && pokemons.moves.slice(0,4).map(move => (   
                    <li className="list-group-item" key={move.move.name}>
                        {move.move.name}
                    </li>                
                    ))}
                    </ul>
                    <p className="card-text">Not all the moves are on this list</p>
                    <a className="card-text" href={`https://bulbapedia.bulbagarden.net/wiki/${pokemons.name}#Learnset`}><small className="text-muted">Checkout the full moveset here</small></a>
                    <div style={{padding : 50}}>
                        <button disabled= {catchButton} onClick={Catch} type="button" className="btn btn-primary" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="Catching the pokemon...">
                            Catch! (50% rate of success)
                        </button>                        
                        {nickname}
                    </div> 
                                       
                </div>
                
            </div>            
        </div>               
    );  
}
export default PokemonDetail;