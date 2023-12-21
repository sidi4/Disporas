import { LogoutOutlined } from '@ant-design/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabel from './Tabel';
import './PageContent.css';
import Register from './register';


function PageContent() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div className='PageContent'>
    <Tabel/>
    
    {/* <Link to={'/register'}>Ajouter user</Link> */}
      
    </div>
  )
}

export default PageContent;