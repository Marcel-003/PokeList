import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {releaseMon, decrement} from './actions/actions';
import { Link } from 'react-router-dom';
import store from './store/store';

const MyPokemon = () => {

    const mylist = useSelector(state => state.mylist);
    const [pokemon, setPokemon] = useState([]);
    const dispatch = useDispatch();

    const Release = (mypokemon) => {
        dispatch(releaseMon(mypokemon));
        dispatch(decrement(mypokemon));
        console.log(store.getState());
    }

    
    return(
        <div className="container">
        <div className="card-columns">
            {mylist.map(mypokemon => (      
                <div key = {mypokemon.id} className="card text-center mx-auto" style={{maxWidth : "18rem"}}>
                <img className="card-img-top" src={mypokemon.detail.sprites.front_default} alt="Card image cap"/>
                <div className="card-body">
                    <Link to = { `/detail/${mypokemon.detail.id}` }> 
                    <h5 className="card-title">{mypokemon.nickname}</h5>   
                    </Link>                 
                    {/* {mylist.mypokemon ? <button onClick={() => Release(mypokemon)} type="button" className="btn btn-primary">Release</button> : (null)} */}
                    <button onClick={() => Release(mypokemon)} type="button" className="btn btn-primary">Release</button>
                </div>
            </div> 
            ))}
        </div>
      </div> 
    );
}
export default MyPokemon;