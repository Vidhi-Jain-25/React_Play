import React from 'react';

import Rainbow from '../../hoc/rainbow';
import Songlist from './songlists';

const Concept2=(props)=>{

    return(
        <div className="container">
            <h1 className="center blue-text">Songs</h1>
            <p style={{"margin-bottom":"40px"}}>
                To learn concept of React Hooks. Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. 
                Here we add a new song to our song lists and correspondingly increase the counting of songs.
            </p>
            <Songlist/>
        </div>
    );
}

export default Rainbow(Concept2);