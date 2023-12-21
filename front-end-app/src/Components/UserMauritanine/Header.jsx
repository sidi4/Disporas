import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin from '../Adminstrateur/Login';


import Home from './Home';
import "./Header.css"
import DashbordeAdmin from '../Adminstrateur/DashbordeAdmin';




function Header() {
  return (
    
    <Navbar expand="lg" className="nave bg-body-" style={{height: '80px',maxHeight: '100px'}}>
      <Container fluid>
        <Navbar.Brand>logo</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px'}}
            navbarScroll
          >
            
            <Nav.Link href='/'>Hom</Nav.Link>
           
            
          </Nav>
          
         
            <Link to={'/admin'}><Button type="button" className="btn btn-success">Conecter</Button></Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}



export default Header
