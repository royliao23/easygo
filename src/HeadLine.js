import React from "react";
import './App.css'; 
import Search from './component/Example';
import App1 from './component/App1';
import App2 from './component/App2';
import Search11 from './component/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink as RRNavLink
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
            <NavLink exact to="/about" tag={RRNavLink}>About</NavLink> 
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
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink activeClassName = 'active-link' exact to="/"  tag={RRNavLink}>Home</NavLink>
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
            <NavItem>
            <NavLink activeClassName = 'active-link' exact to="/suppliers"  tag={RRNavLink}>Purchase</NavLink>
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
                <NavLink exact to="/suppliers" tag={RRNavLink}>About1</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink exact to="/suppliers" tag={RRNavLink}>About1</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink exact to="/suppliers" tag={RRNavLink}>About1</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <NavLink exact to="/suppliers" activeClassName = 'active-link' tag={RRNavLink}>Warehouse</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
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
          </Nav>
          Simple Text
        </Collapse>
      </Navbar>
    </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/suppliers">Suppliers</Link>
          </li>
        </ul>

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
  
  "a:active": {
    backgroundcolor: 'yellow'
  }
};