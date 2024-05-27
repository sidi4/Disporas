import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap/Button';
import "./tableAmbassde.css" 

import countries from '../UserMauritanine/countries.json'

import AppHeader from '../Adminstrateur/AppHeadar';
import AppFooter from '../Adminstrateur/AppFooter';
import PhoneInput from 'react-phone-input-2';
import NavTop from './NavTop';
import Sidebar1 from './Sidebar1';
export default function EditDispora() {
    
    const navigate =useNavigate();
    const {id}=useParams();
    // const [inputs , setInputs] =useState([])

    const [userField,setUserField] = useState([]);
    const [imagefil,setPhoto] = useState('')
    const [mesage , setMesage] =useState('')
 
    const [pays_residence,setPays_residence] = useState('')
  
    // const changeUserFiledHandler= (event)=>{
    //   const name= event.target.name;
    //   const value = event.target.value;
    //   setInputs(values=>({...values,[name]:value}));

    // }

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
      const handleChange = (event) =>{
       const name = event.target.name;
       const value = event.target.value;
       setUserField(values =>({...values, [name]: value}));
        //  console.log(userField);
        }
        

      const upladeUser=async()=>{
        const formData = new FormData();
        formData.append('_method','PUT');
        formData.append('nom',userField.nom)
                formData.append('prenom',userField.prenom)
                formData.append('num_passport',userField.num_passport)
                formData.append('NNI',userField.NNI)
                formData.append('email',userField.email)

                formData.append('image',imagefil)
                formData.append('sex',userField.sex)
                formData.append('Adresse',userField.Adresse)
                formData.append('enfant',userField.enfant)
                formData.append('pays_residence',userField.pays_residence)
                formData.append('num_telphon',userField.num_telphon)
                formData.append('type_identite',userField.type_identite)
                formData.append('le_travil',userField.le_travil)

                 const response = await axios.post(`/api/modiferDispor/`+id,formData,{ 
                    headers:{'Content-Type':"multipart/form-data"},
                  }).then(({data})=>{
                    console.log(data.message)
                    swal("Success",data.message,"success");
                    navigate('/dashbordAmbasade')
                  }).catch(({response})=>{
                    if (response.status ==404) {
                      console.log(response.data.errors)
                      swal("Warning", response.data.message,"warning");
                    } else {

                      console.log(response.data.message)
                      swal("Warning", response.data.message,"warning");
                    }
                })

                //   setMesage(response.data.mesage);
                  
                // //   console.log(response)

                //   setTimeout(()=>{
                //     navigate('/dashbordAmbasade');
                //   },2000);

      };

      
        const onSubmitchange =async (e) =>{
          e.preventDefault();
          await upladeUser();
          
          

          
      }
      
  return (
   <div> 
  <NavTop/>
  <div class="container-xl px-4 mt-4">
        
    <hr class="mt-0 mb-4"/>
    <p className='text-success'><b>{mesage}</b></p>
  <form onSubmit={onSubmitchange}>
    <div class="row">
        <div class="col-xl-4">
          
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Image Dispora</div>
                <div class="card-body text-center">
                   
                <img src={`http://127.0.0.1:8000/storage/${userField.image}`} style={{textAlign:"center",width:"200px",position:"relative",right:"250px"}}/>
                   
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                  
                    <input class="form-control btn btn-primary" type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>Ajouter nivaux image
                </div>
            </div>
        </div>
        <div class="col-xl-8">
          
            <div class="card mb-4">
                <div class="card-header">Dispora Details</div>
                <div class="card-body">
                  
                  
                       
                     <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputUsername">Nom</label>
                            <input class="form-control" id="inputUsername" type="text" name="nom" placeholder="Enter your username" value={userField.nom} onChange={handleChange }/>
                        </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Prenom</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" name='prenom' value={userField.prenom} onChange={handleChange }/>
                            </div>
                          
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Numero de cart identite</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" name='NNI'value={userField.NNI} maxLength={10} onChange={handleChange } />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Numero de passpoert</label>
                                <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" name='num_passport' maxLength={10} value={userField.num_passport} onChange={handleChange }/>
                            </div>
                            
                        </div>
                       
                        <div class="row gx-3 mb-3">
                        
                            <div class="col-md-4">

                                <label class="small mb-1" for="inputLocation">Pays de residense</label>
                            <select name="pays_residence" id="" className='form-select' value={userField.pays_residence} onChange={handleChange}>
                              <option selected>select pays</option>
                              {
                                countries.map((getcountry,index)=>(
                                  <option value={getcountry.country_name} key={index}>{getcountry.country_name}</option>
                                ))
                              }
                              </select>

                           
                            </div>
                            <div class="col-md-4">
                                <label class="small mb-1" for="inputLocation">Le travail</label>
                                <select  className='form-select' name='le_travil' value={userField.le_travil} onChange={handleChange}>
                              <option selected>Choisi le taravile</option>
                                <option value="CommerÇant">CommerÇant</option>
                                <option value="médecin">médecin</option>
                                <option value="Ingénieur">Ingénieur</option>
                                <option value="étudiant">étudiant</option>
                                </select> 
                                {/* <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" name='le_travil' value={userField.le_travil} onChange={handleChange}/> */}
                            </div>
                            <div class="col-md-4">
                                <label class="small mb-1" for="inputLocation">Address</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" name='Adresse' value={userField.Adresse} onChange={handleChange} />
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputEmailAddress">address Email </label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name='email' value={userField.email} onChange={handleChange }/>
                        </div>
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputEmailAddress">Gender</label>
                            <input class="form-control" id="inputEmailAddress"  placeholder="Enter your email address" name='sex' value={userField.sex}/>
                        </div>
                        </div>
                        <div class="row gx-3 mb-3">
                           
                            <div class="col-md-4">
                                <label class="small mb-1" for="inputPhone">Numero de telphon</label>
                                {/* <PhoneInput className="" country={'us'} inputProp={{required:true,}} onch name  id="num_telphon" placeholder="voter num_telphon" /> */}
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name='num_telphon' value={userField.num_telphon} onChange={handleChange }/>
                            </div>
                           
                            <div class="col-md-4">
                                <label class="small mb-1" for="inputBirthday">Enfents</label>
                                <input class="form-control" id="inputBirthday" type="text"name='enfant' value={userField.enfant} onChange={handleChange }/>

                            </div>
                            <div class="col-md-4">
                                <label class="small mb-1" for="inputBirthday">Type de identiter</label>
                                <input class="form-control" id="inputBirthday" type="text"  name='type_identite'value={userField.type_identite} onChange={handleChange }/>
                                
                            </div>
                        </div>
                       
                        <button class="btn btn-primary" type="submit">Modifer</button>
                        <Link to={'/dashbordAmbasade'}><button class="btn btn-primary m-2" type="submit">Retour</button></Link>
                   
                </div>
            </div>
        </div>
    </div>
    </form>
</div>
<AppFooter/>
</div>
   
   
  )
}
