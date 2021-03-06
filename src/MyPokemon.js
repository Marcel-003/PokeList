import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {releaseMon, decrement} from './actions/actions';
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

        {/* {Object.keys(mylist).map((mypokemon, i) => (
            <div key={i} className="card text-center mx-auto" style={{maxWidth : "18rem"}}>
                <img className="card-img-top" src="" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{mypokemon.mylist.nickname}</h5>                    
                    <button type="button" className="btn btn-primary">Release</button>
                </div>
            </div> 
        ))} */}


            {mylist.map(mypokemon => (      
                <div key = {mypokemon.name} className="card text-center mx-auto" style={{maxWidth : "18rem"}}>
                <img className="card-img-top" src={mypokemon.detail.sprites.front_default} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{mypokemon.nickname}</h5>                    
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