import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Button, Navbar, Modal } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

import { useState, useContext } from 'react';
import { CartContext } from '../components/ShoppingCart/CartContext';
import CartProduct from '../components/ShoppingCart/CartProduct';


const NavbarMain = () => {
  const cart = useContext(CartContext);

  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity,0);

  return (
    <>
      <div id="MasterContainer">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#/JavaScriptTesting" style={myStyles.navBarMarginLeft}>Javascript Testing</Navbar.Brand>
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

              <Navbar.Brand href="#/Store">Ecommerce Store</Navbar.Brand>

            </Nav>

          </Navbar.Collapse>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart ({productsCount}) Items</Button>
          </Navbar.Collapse>
        </Navbar>
        
        <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton >
              <Modal.Title>Shopping Cart</Modal.Title>
           </Modal.Header>
           <Modal.Body>
              {productsCount > 0 ?
                <>
                 <p>Items in your cart:</p>
                 {cart.items.map((currentProduct, idx) =>(
                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                 ))}

                 <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                  <Button variant='success'>
                      Purchase items!
                  </Button>
                </>
              :
              <h1>There are not items in your cart</h1>
              }
            
           </Modal.Body>
        </Modal>

      </div>
    </>
  )

}


const myStyles = {
  navBarMarginLeft: {
    marginLeft: '15px'
  },
};


export default NavbarMain

