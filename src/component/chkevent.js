import React, { Component } from 'react';
// import App from '../App'
class chkevent extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    onChange = event => {
        this.props.onNameChange(event.target.value)
        console.log(this.props.onNameChange)
    }
    render(){
        // let { tsText } = this.props
        return (
            <div > 
                <input type="text" onChange={this.onChange}/>
            </div>
        );
    }
}
export default chkevent;