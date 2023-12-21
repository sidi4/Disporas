import * as  React from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes,Route,Link, useNavigate,} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Login from './Components/Adminstrateur/Login'
import CreateDiaspora from './Components/UserMauritanine/CreateDiaspora';
import Home from './Components/UserMauritanine/Home';
import Header from './Components/UserMauritanine/Header';
import DashbordeAdmin from './Components/Adminstrateur/DashbordeAdmin';

import Regiter from './Components/Adminstrateur/register';
import View from './Components/Adminstrateur/View';
import axios from 'axios';
import DashboardAmbasde from './Components/Ambassade/DashboardAmbasde';
import Edit from './Components/Adminstrateur/Edit';
import EditDispora from './Components/Ambassade/EditDispora';
import Tabel from './Components/Adminstrateur/Tabel';
import TabelAmbasade from './Components/Ambassade/TableAmbasade';
import ViewD from './Components/Ambassade/ViewD';



axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


axios.defaults.withCredentials = true;


axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;

})


function App() {


  return (
<div className='App'>


    <Router>
      <Routes>
      <Route index element={<Home/>} />
        <Route path='/ajouter-Diaspora' element={<CreateDiaspora/>} />
        <Route path='/admin' element={<Login/>}/>
        
        <Route path='/Table' element={<Tabel/>}/>
        
        <Route path='/register' element={<Regiter/>}/>
        
        
        <Route path='/dashbord' element={<DashbordeAdmin />}/>
        <Route path='/dashbordAmbasade' element={<DashboardAmbasde/>}/>
        <Route path='/tableAmbasade' element={<TabelAmbasade/>}/>
        <Route exact path="/view/:id" element={<View/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
        <Route exact path="/viewD/:id" element={<ViewD/>}/>
        <Route exact path="/editdispora/:id" element={<EditDispora/>}/>
      </Routes>
    </Router>

</div>
  );

}

export default App;
