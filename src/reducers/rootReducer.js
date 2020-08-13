const initialState ={
    posts:[               //This is representing the data that we're getting using axios.
        { id: 1, title: 'First post', content: 'Hey firsty' },
        { id: 2, title: 'Second post', content: 'Hey secondy'}, 
        { id: 3, title: 'Third post', content: 'Hey thirdy'}
    ]
}

const rootReducer = (state= initialState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts=state.posts.filter( post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;