import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import './App.css';
import './NavLink.js';  
import Search from './component/Example';
import App1 from './component/App1';
import Appupload3 from './component/appupload3';
import App2 from './component/App2';
import App3 from './component/Appviewonly3';
import Search11 from './component/Search';
import Login from './component/login';
//import Logout from './component/logout';
import Signup from './component/signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink as RRNavLink
} from "react-router-dom";
import Head2 from './signin.js';
//import Example from "./Example";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

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
  DropdownItem,
  //NavbarText,
} from 'reactstrap';

function Buttonswitch() {
  // Declare a new state variable, which we'll call "count"
  const [isLoggedIn, setIsLoggedIn] = useState('');
  setIsLoggedIn(localStorage.getItem('authcode'));
  if ({isLoggedIn}=='')
  {
  return (
    <div>
     <NavLink exact to="/login" tag={RRNavLink}>Sign in</NavLink>
    </div>)
  }

  else{
    return (
            <div>
              <NavLink exact to="/logout" tag={RRNavLink}>Sign Out</NavLink>
           </div>
         );}
}



export default function BasicExample() {
  const isLoggedIn = localStorage.getItem('authcode');
  let button;//switch for sign in or sign out
    if (isLoggedIn==='') {
     button= <NavLink exact to="/login" tag={RRNavLink}>Sign in</NavLink>
    //  button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
     button= <NavLink exact to="/logout" tag={RRNavLink}>Sign Out</NavLink>
    }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
   
      <Navbar color="light" light expand="md"> 
        <NavbarBrand href="/books-app" style={{ textDecoration: 'none'}} activeStyle={{color: 'red', fontWeight: "bold",textDecoration: 'none'}}><h1>EasyGo</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className="mr-auto" navbar>
            <NavItem>
            <NavLink className="inactive" activeClassName="active" exact to="/"  tag={RRNavLink}>Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={RRNavLink}  to="/accounts" className="inactive" activeClassName="active" >Accounts</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sales
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink exact to="/suppliers" tag={RRNavLink}>About1</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink exact to="/suppliers" tag={RRNavLink}>About2</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink exact to="/" tag={RRNavLink}>About3</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem >
            <NavLink exact to="/books-app" className="inactive" activeClassName="active" tag={RRNavLink} >Suppliers</NavLink>
            </NavItem>
            
            
            <NavItem>
            <NavLink exact to="/suppliers" className="inactive" activeClassName="active" tag={RRNavLink}>Warehouse</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                Setting
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink exact to="/suppliers" tag={RRNavLink}>About1</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink exact to="/suppliers" tag={RRNavLink}>About1</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink exact to="/accounts" tag={RRNavLink}>Report</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink exact to="/login" tag={RRNavLink}>Sign in</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink exact to="/signup" tag={RRNavLink}>Sign Up </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink exact to="/logout" tag={RRNavLink}>Sign Out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {button}
          
        </Collapse>
      </Navbar>
    </div>
      <div>
        

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/accounts">
          <About />
          </Route>
          <Route path="/suppliers">
            <Dashboard />
          </Route>
          <Route path="/books-app">
            <Home />
            </Route>
          <Route path="/suppliers">
            <Dashboard />
            </Route>
          <Route path="/login2">
            <Loginm />
          </Route>
          <Route path="/login">
            <ProtectedComponent />
          </Route>
          <Route path="/logout">
            <Logoutm />
          </Route>

          <Route path="/signup">
            <Signupm />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
 <App3 />
    </div>
  );
}

function About() {
  return (
    <div>
       
       <Appupload3 />
      <h2>About roy</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
     <App2 />

    </div>
  );
}

function Signupm() {
  return (
    <div>
     <Signup />

    </div>
  );
}

function Loginm() {
  return (
    <div>
     <Login />
     
     
    </div>
  );
  
  
}

const ProtectedComponent = () => {
  if (true)
     return <Redirect to='/login2'  />
 
 return  <Redirect to='/'  />
 }

function Logoutm() {
  localStorage.setItem('accesstoken',{'Authorization':"Token "});
  localStorage.setItem('authcode','');
  return (
    <div>
    you have logged out, Login <a href='/books-app'>here </a>again.
    
    </div>
  );
 
}



const style = {
  color: 'blue',
  "a:active": {
    color: 'yellow'
  }
};
