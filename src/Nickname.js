import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {catchMon, increment} from './actions/actions';
import store from './store/store';
import { Link } from 'react-router-dom';

const Nickname = ({pokemon}) => {

    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");

    const enterNickname = e => {
        setNickname(e.target.value);    
      }

    const Catch = () => {                             
        dispatch(catchMon(pokemon, nickname));
        dispatch(increment(pokemon));            
        console.log(store.getState());        
        // console.log(catchSuccess, catchButton);        
    }

    return(
        
        
            <div style={{padding: 30}}>
                <h3>Success!!!</h3>
                <p>Nickname : </p>
                <input type="text" onChange={enterNickname} className="form-control" placeholder="Enter nickname"/>
                <Link to = { `/mypokemon` }>  
                    <button onClick={Catch} className="btn btn-primary" style={{marginTop: 10}}>Submit</button>
                </Link>
            </div>            
            
              
    );
}

export default Nickname;