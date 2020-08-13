import React from 'react';

import Rainbow from '../../hoc/rainbow';
import Songlist from './songlists';

const Concept2=(props)=>{

    return(
        <div className="container">
            <h1 className="center blue-text">Songs</h1>
            <p style={{"margin-bottom":"40px"}}>
                To learn Hooks concept of React. Here we add a new song to our song lists and correspondingly increase the counting of songs.
            </p>
            <Songlist/>
        </div>
    );
}

export default Rainbow(Concept2);