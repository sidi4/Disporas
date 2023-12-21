import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Edit.css"
import NavTop from '../Ambassade/NavTop';
import AppFooter from './AppFooter';
import AppHeader from './AppHeadar';
 function  Edit ()  {
    const navigate =useNavigate();
    const {id}=useParams()

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        role_as:'',
        password: ''
        
        });

    useEffect(()=>{
        fetchUser();
    },[id])

    const fetchUser = async()=>{

        try {
             
              const result = await axios.get("http://127.0.0.1:8000/api/edit/"+id);
            //   console.log(result.data.users)
            setRegister(result.data.users)
        } catch (error) {
            console.log("mage chi")
        }
      }
      
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
                axios.put(`/api/updateUser/`+id,registerInput).then(res => {
                if(res.data.status === 200)
                {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                
                swal("Success",res.data.message,"success");
                
                navigate('/dashbord');  
                
                }})
            })
        }
  return (
    
     
      
        <div>
            <NavTop/>
          
    <div class="col-xl-8">
           <div class="card mb-4">
                <div class="card-header"> Modifeier Admin </div>
                <div class="card-body">
                <form onSubmit={registerSubmit}>
        <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputUsername">Nom</label>
                            <input type="text" class="form-control" name="name" onChange={handleInput} value={registerInput.name} />
                        </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Email</label>
                                <input type="email" class="form-control" name="email" onChange={handleInput} value={registerInput.email}/>
                            </div>
                          
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Mot de passe</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter mot de pass"name="password"onChange={handleInput} value={registerInput.password}/>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Type</label>
                                <select aria-label="Default select example" className="form-control" name="role_as" onChange={handleInput} value={registerInput.role_as} >
                    <option>choisir le type</option>
                      <option value='1'>admin</option>
                      <option  value='0'>ambasade</option>
                  
                         </select>
                    </div>
                            
        </div>
                       
       

        <div class="col-md-6">
                  <button type="submit" class="btn btn-success mt-4">Update</button>
                    <div>
                    <Link to={'/dashbord'}><button type="" class="btn btn-primary mt-4">Retour</button></Link>
                    </div>
        </div>
                </form>
                
        </div> 
                </div>
         </div>
       
        <AppFooter/>
       </div> 
    
      
   
  )
}
export default Edit
