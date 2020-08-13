import React , {useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './newsongform';

// class component to show usage of states in hooks concept
const Songlist = () => {

    const [ songs, setsongs ] = useState([
    ]);

    const [ count, setcount ] = useState(+'');

    const addSongs = (title) => {
        setsongs([ ...songs, { title:title , id:uuidv1() } ])
    }

    useEffect(() => {
        console.log('This ran. SetSongs: ', setsongs);
    }, [songs])  

    useEffect(() => {
        console.log('This ran. SetCount: ', count);
    }, [count])  

    const check=()=>{
        if(songs.length>0)
            return true;
        else 
            return false;
    }

    return(
        <div className="song-list">
            {check() && <h4 className="center">Songs are as: </h4>}
            {!check() && <h4 className="center">No songs yet!!</h4>}
            <ul>
                {
                    songs.map(song => {
                        return ( 
                            <li key={song.id}>{song.title}</li>     //key is expected by react for uniqueness.
                        )
                    })
                }
            </ul>
            <div style={{color:"red"}}>Total Count: {count}</div>
            <button style={{color:"red"}} onClick={()=>setcount(count+1)}>Increase count by one</button>
            <div style={{margin:"20px"}}></div>
            <NewSongForm addSongs={addSongs}/>
        </div>
    );

}
export default Songlist;