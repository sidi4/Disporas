import React,{useState} from 'react'
import TabelAmbasade from './TableAmbasade';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import TabelA from '../Adminstrateur/Tabel';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, NavDropdown, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle  ,Nav} from 'react-bootstrap';
import  "./NavTop.css"


function NavTop() {
  const navigate = useNavigate();
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
       
       <button className="dropdown-item" type='button' onClick={logoutSubmit}>Se déconnecter</button>
      
        );
    }
      
     
    const [style,setStyle]= useState("navbar-nav gradient sidebar sidebar-dark accordion")
    const changeStyle1 =()=>{
      if(style=="navbar-nav gradient sidebar sidebar accordion")
      {
          setStyle("navbar-nav gradient sidebar sidebar-dark accordion toggled1");
      }
      else{
          setStyle("navbar-nav gradient sidebar sidebar-dark accordion");
      }
  }
    return (
      <div>
      <nav class="navbar navbar-expand navbar topbar mb-4 static-top shadow">
     
     

      {/* <!-- Topbar Navbar --> */}
      <ul class="navbar-nav ml-auto">
     
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
       

          {/* <!-- Nav Item - Alerts --> */}
  
          {/* <!-- Nav Item - Messages --> */}
        

          <div class="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                  <button className='btn btn-primary'>Deconnecter</button>
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                  </a>
                  <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                  </a>
                  <a class="dropdown-item" href="#">
                      <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                  </a>
              </div>
          </li>

      </ul>

  </nav>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">Sélectionnez « Se déconnecter » ci-dessous si vous êtes prêt à mettre fin à votre session en cours.</div>
        <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Anuller</button>
            
            <button className="btn btn-primary" type="submit" data-dismiss="modal"> {AuthButtons}</button>
        </div>
    </div>
</div>
</div>
</div>
 
  )
}

export default NavTop
