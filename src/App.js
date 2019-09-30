import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ChkEvent from './component/chkevent';
import Users from './component/user/user';
import { Route, Link } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sayHello: "Hello",
      isOpen: false,
      member: "",
      tsText:"SK8",
      user : [],
      divID : {}
    }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  checkID = id => {
    this.setState({divID:id})
  }
  onNameChange = (tsText) => {
    this.setState({tsText: tsText})
  }

  render() {
    const {sayHello, tsText, user, divID} = this.state
    console.log(divID.id)
    return (
      <div>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/users">Components</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
          <Route path="/users" component={() => <Users checkID={this.checkID} /> } />
        <img src={logo} className="App-logo" />
        <h1>{divID.innerText}</h1>
        {/* <h1>{parseInt(divID.id) === 2 ? divID.outerHTML : "none"}</h1>; */}
        <h1>{sayHello} {tsText} <ChkEvent onNameChange={this.onNameChange} /></h1>
        {/* <h2>Test {divID}</h2> */}
        {/* <div><Users checkID={this.checkID} /></div> */}
        
      </div>
    )
  }

}

export default App;
