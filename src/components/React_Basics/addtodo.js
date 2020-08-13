import React, { Component } from 'react';

class Addtodo extends Component {

    state = {
        title: '',
        details: ''
    }

    handleChange = (e) => {
        // console.log(e.target);        //this points to input tag and its attributes
        this.setState(
            { [ e.target.id ]  : e.target.value   }
        )
    }

    handleSubmit = (e) => { 
        e.preventDefault();        //bydefault it refreshes the pdetails nd thus our updates get vanished.
        this.props.addtodo(this.state);
        this.setState({
            title:'',
            details:''
        })
    }

    render() {
        return (
            <div style={{margin:"20px"}}>
                <h6> Add New Todo </h6>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
                    <label htmlFor="details">Details:</label>
                    <input type="text" id="details" onChange={this.handleChange} value={this.state.details}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default Addtodo;