import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {deletePost } from '../../actions/postActions'

class Post extends React.Component{

    // REDUX DONT NEED THEM AS WE'RE NOT going to store the state of the component anymore, as redux is about state of central store
    // state={
    //     id:null,
    //     post:null
    // }

    // REDUX DONT NEED THEM
    // componentDidMount(){
    //     let id=this.props.match.params.post_id; //grab id from url in variable "id"
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(response => {
    //         this.setState({
    //             post: response.data,
    //             id:id
    //         });
    //     });
    // }

    handleClick = () => {
        this.props.deletePost(this.props.location.post.id);
        this.props.history.push('/pg1'); //redirect instead of displaying loading posts..
    }

    render(){
        // const post = this.state.post ? (           //not redux
        const post = this.props.location.post ? (                //REDUX
            <div className="post">
                {/* <h4 className="center">{this.state.post.title}</h4> */}
                <h4 className="center">{this.props.location.post.title}</h4>
                {/* <p>{this.state.post.content}</p> */}
                <p>{this.props.location.post.content}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ): (
            <div className="center">Loading post...Wait for sometime and Try again!</div>
        );

        return(
            <div className="container">
                <h6>Elaborated version of post</h6>
                {/* <h1>{this.state}</h1> */}
                {post}
            </div>
        );
    }
}

//to grab single individual record on store 
//ownProps=props of this component 
const mapStateToProps = (state, ownProps) => {
    let id=ownProps.match.params.post_id;
    return{
        post: state.posts.filter( (post) => post.id === id )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            // dispatch({ type: 'DELETE_POST', id:id })
            dispatch( deletePost(id) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);