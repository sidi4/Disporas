import React from 'react';
import { Image } from 'react-bootstrap';
import  imag1 from './imag1.jpg'
import "./Login.css";
import Header from '../UserMauritanine/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core';

import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';



function Login() {

const navigate = useNavigate();

const [loginInput, setLogin] = useState({
email: '',
password: '',
error_list: [],
});

const handleInput = (e) => {
e.persist();
setLogin({...loginInput, [e.target.name]: e.target.value });
}

const loginSubmit = (e) => {
e.preventDefault();

const data = {
email: loginInput.email,
password: loginInput.password,
}

axios.get('/sanctum/csrf-cookie').then(response => {
axios.post(`api/login`,data).then(res => {
if(res.data.status === 200)
{
localStorage.setItem('auth_token', res.data.token);
localStorage.setItem('auth_name', res.data.username);
swal("Success", res.data.message,"success");
console.log(res.data.username);

if(res.data.role === 'admin')

{
navigate('/dashbord');


}
else
{
navigate('/dashbordAmbasade');
}
}
else if(res.data.status === 401)
{
swal("Warning", res.data.message,"warning");
}
else
{
setLogin({...loginInput, error_list: res.data.validation_errors });
}
});
});

}

return (



<div>
    
    <Header/>   
    <div className='login template d-flex justify-content-center align-items-center w-100 vh-100'>
      <div className='form_contanier p-5 rounded shadow bg-white'>
      <form onSubmit={loginSubmit}>
          <h3 className='text-center'>Se connecter</h3>
          <div className='mb-2'> 
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='entre voter email' name="email" onChange={handleInput} value={loginInput.email} className='form-control'/>
            <span>{loginInput.error_list.email}</span>
          </div>
          <div className='mb-2'>
            <label htmlFor="email">mot de passe</label>
            <input type="password" placeholder='entre voter mot de pass' name="password" onChange={handleInput} value={loginInput.password} className='form-control'/>
            <span>{loginInput.error_list.password}</span>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary' type='submit' >se connecter</button>
          </div>
     
      </form>
      </div>
      </div>  
    </div>
    

);
}

export default Login;
