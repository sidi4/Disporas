import { ApartmentOutlined, OrderedListOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React,{useState} from 'react'

import { NavLink,Link } from 'react-router-dom';


function SideMenu() {
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
    <div className='SideMenu'>
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
           
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div  className="container-fluid">

                {/* <!-- Page Heading --> */}
               

                {/* <!-- Content Row --> */}
                <div  className="row">
             
              
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
    </div>
    
  )
}

export default SideMenu
