import React,{useState} from 'react'

import { Link, useNavigate } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import axios from 'axios';
import swal from 'sweetalert';


import Login from '../Adminstrateur/Login';
import AppHeader from '../Adminstrateur/AppHeadar';
import Tabel from './Tabel';
import NavTop from '../Ambassade/NavTop';






function SidebarA() {    
      
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
   
   <button className="dropdown-item" type='button' onClick={logoutSubmit}>Logout</button>
  
    );
}
    
    const [style,setStyle]= useState("navbar-nav gradient sidebar sidebar-dark accordion")
    const changeStyle =()=>{
        if(style=="navbar-nav gradient sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav gradient sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav gradient- sidebar sidebar-dark accordion");
        }
    }
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


<body id="page-top" >

{/* <!-- Page Wrapper --> */}
<div id="wrapper">


    {/* <!-- Sidebar --> */}
    <ul className={style}   id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a  className="sidebar-brand d-flex align-items-center justify-content-center">
            <div  className="sidebar-brand-icon">
               
             
            </div>
            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div  className="text-center d-none d-md-inline">
                <button  className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
            </div>
            <div  className="sidebar-brand-text mx-3">Dispora Site</div>
        </a>

     
        <hr  className="sidebar-divider my-1"/>

        <li  className="nav-item active">
            <Link to={'/dashbordAmbasade'} className="nav-link">
                <i  className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>  

        <hr  className="sidebar-divider d-none d-md-block"/>
            
        <li  className="nav-item active">
            <Link to={'/dashbord'} className="nav-link">
                <i  className="fas fa-fw fa-tachometer-alt"></i>
                <span>Les Utilisateurs</span></Link>
        </li>

        <hr  className="sidebar-divider d-none d-md-block"/>

        

    </ul>
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper"  className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <NavTop/>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div  className="container-fluid">

                {/* <!-- Page Heading --> */}
               

                {/* <!-- Content Row --> */}
                <div  className="row">
                <Tabel/>

                </div>
            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <footer  className="sticky-footer bg-white">
            <div  className="container my-auto">
                <div  className="copyright text-center my-auto">
                    <span>Copyright &copy; Dispora Website 2023</span>
                </div>
            </div>
        </footer>
        {/* <!-- End of Footer --> */}

    </div>
    {/* <!-- End of Content Wrapper --> */}

</div>
{/* <!-- End of Page Wrapper -->

<!-- Scroll to Top Button--> */}
<a  className="scroll-to-top rounded" href="#page-top">
    <i  className="fas fa-angle-up"></i>
</a>

{/* <!-- Logout Modal--> */}


</body>

  )
}
export default SidebarA;
