import React, { useEffect, useState } from 'react'
import AppHeader from '../Adminstrateur/AppHeadar'

import NavTop from './NavTop';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppFooter from '../Adminstrateur/AppFooter';

function ViewD() {
  const [userField,setUserField] = useState([]);
  const navigate =useNavigate();
    const {id}=useParams();
  useEffect(()=>{
    fetchUser();
},[])

const fetchUser = async()=>{

    try {
         
          const result = await axios.get("http://127.0.0.1:8000/api/editDiaspora/"+id);
        //   console.log(result.data.users)
          setUserField(result.data.users)
    } catch (error) {
        console.log("mage chi")
    }
  }
  return (
    <div id='page-top'>
        <NavTop/>
      
    <div className="container">
      <h3 className='text-center'>Information Dispora</h3>
    <div className="main-body">
    
          {/* <!-- /Breadcrumb --> */}
      <Link to={'/dashbordAmbasade'}><button className='btn btn-primary m-2'>Retour</button></Link>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  <img src={`http://127.0.0.1:8000/storage/${userField.image}`} style={{textAlign:"center",width:"200px",position:"relative",right:"150px"}}/>
                    <div className="mt-3">
                      <h4>{userField.nom}</h4>
                      <p className="text-secondary mb-1">{userField.le_travil}</p>
                      <p className="text-muted font-size-sm">{userField.pays_residence}</p>
                     
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Nom</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                     {userField.nom}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Prenom</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                     {userField.prenom}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6"> 
                      <h6 className="m-1">Numero de carte Identiter</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                      {userField.NNI}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Numero de passport</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                    {userField.num_passport}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Email</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                     {userField.email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Gender</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                     {userField.sex}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Address</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                     {userField.Adresse}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Telephon</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                     +{userField.num_telphon}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Enfants</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                    {userField.enfant}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6 className="m-1">Type de identiter</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                    {userField.type_identite}
                    </div>
                  </div>
                  
                  
                  
                </div>
              </div>

            </div>
          </div>

        </div>
    </div>
    <a  className="scroll-to-top rounded" href="#page-top">
    <i  className="fas fa-angle-up"></i>
</a>
    <AppFooter/>
    </div>
  )
}

export default ViewD
