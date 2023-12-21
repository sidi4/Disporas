import React ,{ Component, useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import countries from './countries.json'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Routes,Route,Link, BrowserRouter } from 'react-router-dom'
import swal from 'sweetalert';

import Header from './Header';
import { icon } from '@fortawesome/fontawesome-svg-core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css';


// import Select from "react-select";

import create from '@ant-design/icons/lib/components/IconFont';
import { AlertFilled } from '@ant-design/icons';

import Select from 'react-select'
import countryList from 'react-select-country-list'
// import { Container } from 'react-bootstrap';
import AppFooter from '../Adminstrateur/AppFooter';





const  CreateDiaspora = () => {
    
    const navigate = useNavigate();
   
    const [nom,setNom] =useState('')
    const [prenom,setPrenom] =useState('')
    const [num_passport,setNum_passport] =useState('')
    const [NNI,setNNI] =useState('')
    const [email,setEmail] = useState('')
    const [image,setImage] = useState('')
    const [sex,setSex] = useState('')
    const [Adresse,setAdress] = useState('')
    const [enfant,setEnfant] = useState('')
    const [pays_residence,setPays_residence] =useState('')
    const [num_telphon,setNum_telphon] = useState('')
    const [ type_identite,setType_identite] = useState('')
    const [ le_travil,setLe_travil] = useState('')
    const [valid,setValid] = useState(true);
    // const [valide,setValide] = useState(true);
   
    
    const handleChange =(value)=>{
      
        setNum_telphon(value);
        setValid(validetenum_telphon(value));
    };
    const validetenum_telphon = (Num_telphon)=>{
        const num_telphonPattern =/^\d{10}$/;
        return num_telphonPattern.test(Num_telphon);
    }
    // NNI
  //   const HandleChange =(e)=>{
  //     setNNI(e);
  //     setValide(validetenum_NNI(e));
 
  const [numbers, setNumbers] = useState([]);

  const handleChange1 = (e) => {
    setNNI(e.target.value);
  };
    
    const changeHandler = (e)=>{
        setImage(e.target.files[0]);
    }

    const createDispora = async(e)=>{
                e.preventDefault();
               
                const formData = new FormData();
                formData.append('nom',nom)
                formData.append('prenom',prenom)
                formData.append('num_passport',num_passport)
                formData.append('NNI',NNI)
                formData.append('email',email)
                formData.append('image',image)
                formData.append('sex',sex)
                formData.append('Adresse',Adresse)
                formData.append('enfant',enfant)
                formData.append('pays_residence',pays_residence)
                formData.append('num_telphon',num_telphon)
                formData.append('type_identite',type_identite)
                formData.append('le_travil',le_travil)

                if (!numbers.includes(NNI)) {
                  // Add the number to the array
                  setNumbers([...numbers,NNI]);
                  // Clear the input field
                  setNNI('');
                } else {
                  swal("Warning","le nomber deja entre");;
                }
                
               axios.get('/sanctum/csrf-cookie').then(response => {
              try {
                
                   axios.post(`/api/ajouter-user`, formData,{
                    headers:{'Content-Type':"multipart/form-data"},
                    }).then(({data})=>{
                      console.log(data.message)
                      swal("Success",data.message,"success");
                      navigate('/')
                    }).catch(({response})=>{
                      if (response.status ==404) {
                        console.log(response.data.errors)
                        swal("Warning", response.data.message,"warning");
                      } else {

                        console.log(response.data.message)
                        swal("Warning", response.data.message,"warning");
                      }

                    })
                    
                   
                    
                                      
               } catch (err) {
               
                console.log("err")
               
              
               }
              })
              
             
              
              
                
                    
               
          
        


           
        
        
            }

    

    


    return(
        <body className="bg-primary bg-opacity-25" id='page-top'>
                <Header/>
                  <section className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
                              <div className="container postion">
                                  <div className="row">
                                      <div className="col-md-10 mx-auto rounded shadow bg-white">
                                      <div className='row'>
                                          <div className='col-12'>
                                              <div className='m-3 text-center'>
                                                  <h1>
                                                  Ajoutez vos informations
                                                  </h1>
                                           </div>
                                          </div>
                        <div className='col-12 col-sm-12- col-md-12'>
                        <div className='from-wrapper'>
                         <form onSubmit={createDispora}>  
  
                          <div className="row mb-4">
                              <div className="col-4">
                              <label htmlFor="">Nom</label>
                              <input type="text"className="form-control" id="nom"placeholder='voter nom' value={nom} onChange={(e) => {setNom(e.target.value)}} />
                              </div>
                              <div className="col-4">
                              <label htmlFor="">Prenom</label>
                             <input type="text" className="form-control" id="prenom" placeholder='voter prenom' value={prenom} onChange={(e) => {setPrenom(e.target.value)}}/>
                             
                              </div>
                              <div className="col-4">
                              <label htmlFor="">Numero de passport</label>
                              <input type="text" maxlength={10}className="form-control" id="num_pasport" placeholder='voter numero passport' value={num_passport} onChange={(e) => {setNum_passport(e.target.value)}}/>
                              </div>
                          </div>
                          <div className="row mb-4">
                              <div className="col-4">
                              <label htmlFor="">Numero de cart identite</label>
                              <input className="form-control" 
        type="text"
        value={NNI} 
        placeholder="voter NNI" 
        onChange={handleChange1}
        maxLength={10}/>
                              {/* <input type="text" id="NNI" placeholder="voter NNI" value={NNI} onChange={(e) => {setNNI(e.target.value)}} */}
                            
                              </div>
                              <div className="col-4">
                              <label htmlFor="">Email</label>
                              <input type="email" className="form-control" id="email" placeholder='voter email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                              </div>
                              <div className="col-4">
                              <label htmlFor="">Photo</label>
                              <input type="file" className="form-control btn btn-primary" id="image" onChange={changeHandler} placeholder='choisi Image'/>
                              </div>
                              
                            </div>
                            <div className="row mb-4">
                            <div className="col-3">
                              <label htmlFor="">Gender</label>
                               <select id=""  className='form-select' onChange={(e) => {setSex(e.target.value)}}>
                               <option selected>Choisi le Sex</option>
                                <option value="Male">Male</option>
                                <option value="Femele">Femel</option>
                               </select>
                             </div>
                              <div className="col-3">
                              <label htmlFor="">Adresse</label>
                              <input type="text" className="form-control" id="email" placeholder='voter Adresse' value={Adresse} onChange={(e) => {setAdress(e.target.value)}}/>
                             
                              </div>
                              <div className="col-3">
                              <label htmlFor="">Enfents</label>
                              <input type="number" className="form-control" id="Enfants" placeholder='Enfants' value={enfant} onChange={(e) => {setEnfant(e.target.value)}}/>
                              </div>
                             
                              <div className="col-3">
                              <label htmlFor="">Pays de residance</label>
                            
                             
                           <select name="" id="" className='form-select' onChange={(e) => {setPays_residence(e.target.value)}} >
                              <option selected>select pays</option>
                              {
                                countries.map((getcountry,index)=>(
                                  <option value={getcountry.country_name} key={index}>{getcountry.country_name}</option>
                                ))
                              }
                             </select>
                            </div>
                            </div>
                            <div className="row mb-4">
                            
                              <div className="col-4">
                              <label htmlFor="">le travail</label>
                               <select name="le_travil" className='form-select' onChange={(e) => {setLe_travil(e.target.value)}}>
                              <option selected>Choisi le taravile</option>
                                <option value="CommerÇant">CommerÇant</option>
                                <option value="médecin">médecin</option>
                                <option value="Ingénieur">Ingénieur</option>
                                <option value="étudiant">étudiant</option>
                                </select> 
                              </div>
                              
                              <div className="col-4">
                              <label htmlFor="">Numero de telephon</label>
                              <PhoneInput className="" country={'us'} value={num_telphon} onChange={handleChange} inputProp={{required:true,}} id="num_telphon" placeholder="voter num_telphon" />
                              {!valid &&<p>S.V.P entre 10 Chiffer</p>}
                              </div>
                              <div className="col-4">
                              <label htmlFor="">le type de identites</label>
                              <input type="type_identite" className="form-control" id="type_identite" placeholder='voter type_identite' value={type_identite} onChange={(e) => {setType_identite(e.target.value)}}/>
                              </div>
                            </div>
  
                      <div className="col-12 m-4 text-center">
                          <button class="btn btn-primary justfy-content-center"type="submit">Energestre</button>
                      </div>
                  </form>
                  </div>   
  
                  </div>
  
                                          
                  </div>
  
                  </div>
                  </div>
                  </div>
                  
                    </section>  
                    <a  className="scroll-to-top rounded" href="#page-top">
    <i  className="fas fa-angle-up"></i>
</a> 
                    <AppFooter/>
                     
                    

              </body>
              
       

    );
    
}
export default CreateDiaspora;



        
        
    
        
        
        
    
  
  
 
  