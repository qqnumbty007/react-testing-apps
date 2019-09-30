import React, { Component } from 'react';
// import App from '../App'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from 'axios';
class chkevent extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({users: result.data});
      
      };
    onChange = event => {
        this.props.onNameChange(event.target.value)
        console.log(event.target)
        // console.log(this.props.onNameChange)
    }
    render(){
        let { users } = this.state
        // console.log(users);
        return (
            <div > 
                <input type="text" onChange={this.onChange} />
            </div>
            )};
        }
export default chkevent;