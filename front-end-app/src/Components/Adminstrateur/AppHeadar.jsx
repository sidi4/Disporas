import React from 'react'

import { Image, Space, Typography } from 'antd';
import { BellFilled, MailOutlined } from "@ant-design/icons";
import Authuser from './Authuser';

import Login from './Login';
import { Link, useNavigate,NavLink } from 'react-router-dom';
import  axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Container, NavDropdown, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle  ,Nav} from 'react-bootstrap';
import  "../Ambassade/NavTop.css"


function AppHeader() {

const navigate = useNavigate();

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const logoutSubmit = (e) => {
e.preventDefault();

axios.post(`/api/logout`).then(res => {
if(res.data.status === 200)
{
localStorage.removeItem('auth_token');
localStorage.removeItem('auth_name');

swal("Success",res.data.message,"success");
navigate('/admin');

}
});
}
var AuthButtons = '';

if(!localStorage.getItem('auth_token'))
{

}
else{
  AuthButtons = (
   
   <button className="dropdown-item" type='button' onClick={logoutSubmit}>Logout</button>
  
    );
}
const mondata=[
  {
    path:'',
    name: "Home",
  }
]

  return (
    <div className='AppHeader'>

<Navbar className='navbar' expand="lg">
        <Container>
            <Navbar.Brand href='Hom' className='brand'>
                DISPORA SITE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
              {
                mondata.map((item)=>(
                  <NavLink to={item.path} key={item.name}>
                    <div className='list_item'>{item.name}</div>
                  </NavLink>
                ))
              }
              </Nav>
              <Nav>
                <button className='btn btn-success' onClick={handleShow}>Se Deconnecter</button>
              </Nav>
            </Navbar.Collapse>

           

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deconcter</Modal.Title>
        </Modal.Header>
        <Modal.Body>Attension </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          {AuthButtons}
          </Button>
        </Modal.Footer>
      </Modal>
    
        </Container>
   </Navbar>

   
    
   <Space>
    
    
    {/* <button type="button" className="nav-link btn btn-danger btn-sm text-white">{AuthButtons}</button> */}
  
      
   </Space>
    </div>
  )
}

export default AppHeader

