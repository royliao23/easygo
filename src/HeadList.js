import React from "react";
import Search from './component/Example';
import App1 from './component/App1';
import App2 from './component/App2';
import Search11 from './component/Search';
import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import Example from "./Example";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
import { useState } from 'react';
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



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md"> 
        <NavbarBrand href="/"><h1>EasyGo</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/Apporigin/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://royliao23.github.io/books-app">Customer</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sales
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
                  Report
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Supplier</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Purchase</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Accounts
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
                  Report
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Warehouse</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Setting
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
                  Report
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          Simple Text
        </Collapse>
      </Navbar>
    </div>
  );
}

export default function BasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
      <Navbar color="light" light expand="md"> 
        <NavbarBrand href="/"><h1>EasyGo</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto"  navbar>
            <NavItem style={{padding:10}}>
             
              <Link activeClassName = 'active'  exact to="/">Home</Link>
            </NavItem>
            <NavItem style={{padding:10}}>
            <Link  exact to="/">Home</Link>
            </NavItem>
            
            <NavItem style={{padding:10}}>
             
              <Link style={style} exact to="/suppliers">Suppliers</Link>
            </NavItem>
            <NavItem style={{padding:10}}>
            <Link  exact to="/suppliers">Suppliers</Link>
            </NavItem>
            
            <NavItem style={{padding:10}}>
              
              <Link  exact to="/accounts">Accounts</Link>
            </NavItem>
            
            
          </Nav>
          Simple Text
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
 <App1 />
    </div>
  );
}

function About() {
  return (
    <div>
        <Search11 />
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

const style = {
    color: 'blue',
    "a:active": {
      color: 'yellow'
    }
  };
  