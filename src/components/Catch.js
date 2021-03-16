import React, { useEffect, useState } from 'react';
import Nickname from './Nickname';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Catch = ({pokemon}) => {
    let nickname;
    const [catchSuccess, setCatchSuccess] = useState(false);
    const [catchButton, setCatchButton] = useState(false);

    const CatchMon = () => {
        const min = 0;
        const max = 1;
        const rand = Math.floor(Math.random() * (max-min+1) + min);
        if(rand === 1)
        {
            setCatchSuccess(true);
            setCatchButton(true);
        }      
    }

    if(catchSuccess) {
        nickname = <Nickname pokemon={pokemon} />
    }


    console.log("masuk kok", pokemon);
    return(
        <div style={{padding : 50}}>
            <button disabled= {catchButton} onClick={CatchMon} type="button" className="btn btn-primary" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="top" data-content="Catching the pokemon...">
                Catch! (50% rate of success)
            </button>                        
            {nickname}
        </div>         
    );
}

export default Catch;