import React, { Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../../images/pokeball.png';
import { connect } from 'react-redux';

class Concept1 extends Component{

    // REDUX DONT NEED THEM AS WE'RE NOT going to store the state of the component anymore, as redux is about state of central store
    // state={
    //     posts: []
    // }
    
    // REDUX DONT NEED THEM (same reason above)
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => {
    //         this.setState({
    //             posts:response.data.slice(0,5)
    //         });
    //     });
    // }

    render(){
        // const {posts } =this.state; //in REDUX not used, as state of comp no longer exists
        const { posts } = this.props; //grab posts from props in REDUX 
        const postList= posts.length ? (
            posts.map( post => {
                return (
                    <div className="post card" key={ post.id}>
                        <img src={Pokeball} alt="a pokeball" />
                        <div className="card-content">
                            {/* <Link to={'/'+post.id}> */}
                            <Link to={
                                {
                                    pathname: '/'+post.id ,
                                    post: post
                                }
                            }>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.content}</p>
                        </div>
                    </div>
                );
            })
        ) : ( 
            <div className="center"> No posts yet !!</div>
        );

        
        return(
            <div className="container home">
                <h1>Posts</h1>
                <p>To learn React with Redux. </p>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Concept1);