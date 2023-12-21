import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./tableAmbassde.css" 

import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {Modal,Input } from 'react-bootstrap';
import { Table} from 'bootstrap';

import Pagination from "react-js-pagination";
import  DataTable  from 'react-data-table-component';


import { Popconfirm,Button, Space} from "antd"

import View from '../Adminstrateur/View';
import AppHeader from '../Adminstrateur/AppHeadar';






function TabelAmbasade () {
  
  

  //  const modifiedData = userData.map(({body, ...item})=>({
  //   ...item,
  //   key:item.id,
  //   comment:body,
  //  }))

  const customStyles={
    headRow:{
      style:{
        backgroundColor:'blue',
        color:'white'

      },
    },
    headCells: {
      style:{

        fontSize:'16px',
        fontWeight: '600',
        textTransform: 'uppercase',
      },
    },
    Cells: {
      style:{
        fontSize: '15px'
      }
    },

  }
  
  const column = [
   
    {
      name: "Nom",
      selector : row => row.nom,
      sortable:true
    },
    {
      name: "Prenom",
      selector : row => row.prenom,
      sortable:true
    },
    {
      name: "Nume passpor",
      selector : row => row.num_passport
    },
    {
      name: "Num NNI",
      selector : row => row.NNI
    },
    {
      name: "Email",
      selector : row => row.email
    }
    ,
    {
      name: "Image",
    
      cell: (row) => <img src={`http://127.0.0.1:8000/storage/${row.image}`} alt=''style={{width:'100px', height:'40px',marginBottom:"15px", position:"relative",right:"300px"}}></img>
    }
    ,
    {
      name: "Sex",
      selector : row => row.sex

    }
    ,
    {
      name: "Adresse",
      selector : row => row.Adresse
    }
    ,
    {
      name: "Num_Telphon",
      selector : row => <span>+{row.num_telphon}</span>
    }
    ,
    {
      name: "pays residence",
      selector : row => row.pays_residence


    }
    ,
    {
      name: "Enfants",
      selector : row => row.enfant
    }
    ,
    {
      name: "Travail",
      selector : row => row.le_travil
    
    }
    ,
    {
      name: "type identite",
      selector : row => row.type_identite
    },
    {
      name: "Action",
      align:"center",
      cell: (row)=>(
        <span style={{top:8}}>
       <Button style={{marginTop:8,width:100,height:40,marginBottom:5}} className="btn btn-danger" onClick={()=> (deleteUser(row.id))}>
        Delete
     </Button>
     <Link to={`/editdispora/${row.id}`} ><Button  style={{marginTop:8,width:100,height:40}} className="btn btn-primary">
        Edit
     </Button></Link>
     <Link to={`/viewD/${row.id}`}  ><Button  style={{marginTop:8,marginBottom:5,width:100,height:40}}className="btn btn-success">
        View
     </Button></Link>
     
     </span>
             
       
      )

    },

    

  ]
  
  // console.log(search)
  
    const searchUser = (event) => {
      const newData = filterData.filter(row => row.nom.toLowerCase().includes(event.target.value.toLowerCase()))
      setUSerData(newData)
    }
    const [userData,setUSerData] = useState([]);
    const [filterData,setFilterData] = useState([]);

    const navigate = useNavigate();
    useEffect(()=>{
      fetchData();
    },[])

  
   
    const fetchData = async () =>{
      
        try {

          const result = await axios.get(`/api/usermauri`);
          // console.log(result.data.users)
          setUSerData(result.data.users)
          setFilterData(result.data.users)
          // setInfo(result.data.users)
          // console.log(result.data.users.next_page_url)
          
    } catch (error) {
        console.log("mage chi")
    }
          
}

    
    // delet user

  const deleteUser = async(id)=>{
  
  axios.get('/sanctum/csrf-cookie').then(response => {
  axios.delete(`/api/deleteDispor/`+id).then(res => {
 
    
  const newUserData= userData.filter((item)=>{
      return(
        item.id !== id
      )
    })
    setUSerData(newUserData)
    navigate('/dashbordAmbasade');  

  swal("Success",res.data.message,"success");
 
  });

  });
}


  return (
    
   <div>
     <div  className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1  className="h3 mb-0 text-gray-800">Liste des deispora</h1>

                   
                     <form
                     className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2">
                    <div  className="input-group ">
                        <input type="text"  className="form-control bg-light border-0 small " placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" onChange={searchUser}/>
                        <div  className="input-group-append">
                            <button  className="btn btn-primary" type="button">
                                <i  className="fa fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>
                </div>
   <div>
    <DataTable  pagination columns={column} data={userData} customStyles={customStyles}
    selectableRows>

    </DataTable>
   </div>
  
   </div>
 
   
  )
}

export default TabelAmbasade