import React from 'react';
import { Form, Image } from 'react-bootstrap';
import  imag1 from './imag1.jpg'
import "./Login.css";
import Header from '../UserMauritanine/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import swal from 'sweetalert';
import { Button,Modal,Input } from 'react-bootstrap';
import Tabel from './Tabel';
import DashbordeAdmin from './DashbordeAdmin';


function Register() {

const [show, setShow] = useState(false);


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const navigate = useNavigate();
const [registerInput, setRegister] = useState({
name: '',
email: '',
role_as:'',
password: '',
error_list: [],
});

const handleInput = (e) => {
e.persist();
setRegister({...registerInput, [e.target.name]: e.target.value });
}

const registerSubmit = (e) => {
e.preventDefault();

const data = {
name: registerInput.name,
email: registerInput.email,
password: registerInput.password,
role_as: registerInput.role_as,
}

axios.get('/sanctum/csrf-cookie').then(response => {
axios.post(`/api/register`, data).then(res => {
if(res.data.status === 200)
{
localStorage.setItem('auth_token', res.data.token);
localStorage.setItem('auth_name', res.data.username);

swal("Success",res.data.message,"success");

navigate('/dashbord');  

}
else
{
setRegister({...registerInput, error_list: res.data.validation_errors});
}
});
});
}



return (
<div>
<div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 text-gray-800">Liste de utilisateur</h1>
                                    <a class=" h4 d-none d-sm-inline-block btn btn-sm btn-success shadow-sm m-4" onClick={handleShow}><i
                                            class="text-white-"></i>Ajouter user</a>
      </div>
          
          
 

      <div className="model_box">
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Nouvau utilisateur</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form onSubmit={registerSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Name" name="name" onChange={handleInput} value={registerInput.name} />
                    <span>{registerInput.error_list.name}</span>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name="email" onChange={handleInput} value={registerInput.email}/>
                    <span>{registerInput.error_list.email}</span>
                </div>
                <div class="form-group mt-3">
                    <select aria-label="Default select example" type="text" name="role_as" onChange={handleInput} value={registerInput.role_as} className="form-control">
                    <option>choisir le type</option>
                      <option value='1'>admin</option>
                      <option  value='0'>ambasade</option>
                  
                </select>
                <span>{registerInput.error_list.role_as}</span>
                </div>
                <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter mot de pass" name="password" onChange={handleInput} value={registerInput.password}/>
                    <span>{registerInput.error_list.password}</span>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Energistre</button>

                </form>
            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          
        </Modal.Footer>
      </Modal>


        </div>

     
</div>
);
}

export default Register;