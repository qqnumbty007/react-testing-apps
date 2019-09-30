import React, { Component } from 'react';
import withRequest from '../lib/withRequest'

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: []
        }
    }


    chkT = (chk) => {
        this.props.checkID(chk.target)
       
    }
    render(){
        const { data, checkID} = this.props
        const newDataTest = [...data, {name : "SK8"}];
        const cloneArr = {...newDataTest[0]}
        cloneArr.name = "SK8";

        return (<div >
                User HelloWorld 
                {newDataTest.map( val => 
                (<div id={val.id} onClick={this.chkT}> {val.name}
                
                </div>)) 
                }
            </div>)
        }
    }
export default withRequest('https://jsonplaceholder.typicode.com/users')(Users);