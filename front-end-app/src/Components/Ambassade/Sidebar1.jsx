import React,{useState} from 'react'
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
    
import { Link, useNavigate } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import TabelAmbasade from './TableAmbasade';
import axios from 'axios';
import swal from 'sweetalert';
import './sidebar.css'
import './image1.png';
import Login from '../Adminstrateur/Login';
import AppHeader from '../Adminstrateur/AppHeadar';
import NavTop from './NavTop';



function Sidebar1() {    
      
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

    
    
<body id="page-top">

{/* <!-- Page Wrapper --> */}
<div id="wrapper">


    {/* <!-- Sidebar --> */}
    <ul className={style}   id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a  className="sidebar-brand d-flex align-items-center justify-content-center">
            <div  className="sidebar-brand-icon">
               
             
            </div>
            <div  className="sidebar-brand-text mx-3">Dispora Site</div>
        </a>

     
        <hr  className="sidebar-divider my-1"/>

        <li  className="nav-item active">
            <Link to={'/dashbordAmbasade'} className="nav-link">
                <i  className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>

        <hr  className="sidebar-divider"/>

        
        <hr  className="sidebar-divider"/>

      
        <li  className="nav-item">
            <a  className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i  className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            
        </li>

        <hr  className="sidebar-divider d-none d-md-block"/>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div  className="text-center d-none d-md-inline">
            <button  className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
        </div>

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
                <TabelAmbasade/>

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
      );
    }
    

export default Sidebar1;
