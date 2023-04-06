import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const NavbarMain = () => {

  return (
    <div id="MasterContainer">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/JavaScriptTesting">Javascript Testing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>

                <NavDropdown title="Testing Utilities" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#/JavaScriptTesting">Code Testing</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Forms" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#/DacSchools">School Management</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
       
    </div>
  )

}



export default NavbarMain