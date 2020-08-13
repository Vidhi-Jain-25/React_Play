import React , {useState} from 'react';

const NewSongForm = ( {addSongs} ) => {

    const [title,setTitle] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        addSongs(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song Title: </label>
            <input type="text" value={title} required onChange= {(e) => setTitle(e.target.value) } />
            <input type="submit" value="Add Song"/>
        </form>
    )
}
export default NewSongForm;