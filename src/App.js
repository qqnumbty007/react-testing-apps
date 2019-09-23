import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChkEvent from './component/chkevent'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sayHello: "Hello",
      member: "",
      tsText:"SK8"
    }
  }

  onNameChange = (tsText) => {
    this.setState({tsText: tsText})
  }
  render() {
    const {sayHello, tsText} = this.state
    return (
      <div>
        <img src={logo} className="App-logo" />
        <h1>{sayHello} {tsText} <ChkEvent onNameChange={this.onNameChange} /></h1>
      </div>
    )
  }

}

export default App;
