import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import countries from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import AppFooter from '../Adminstrateur/AppFooter';
import "./style.css";
import PhoneInput from 'react-phone-input-2';

const CreateDiaspora = () => {
  const navigate = useNavigate();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [num_passport, setNum_passport] = useState('');
  const [NNI, setNNI] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [sex, setSex] = useState('');
  const [Adresse, setAdress] = useState('');
  const [enfant, setEnfant] = useState('');
  const [pays_residence, setPays_residence] = useState('');
  const [num_telphon, setNum_telphon] = useState('');
  const [type_identite, setType_identite] = useState('');
  const [le_travil, setLe_travil] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  

  const createDispora = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('num_passport', num_passport);
    formData.append('NNI', NNI);
    formData.append('email', email);
    formData.append('image', image);
    formData.append('sex', sex);
    formData.append('Adresse', Adresse);
    formData.append('enfant', enfant);
    formData.append('pays_residence', pays_residence);
    formData.append('num_telphon', num_telphon);
    formData.append('type_identite', type_identite);
    formData.append('le_travil', le_travil);

    try {
      await axios.post('/api/ajouter-user', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      swal("Success", "تم إرسال النموذج بنجاح!", "success");
      navigate('/');
    } catch (error) {
      swal("Error", "حدث خطأ أثناء إرسال النموذج", "error");
    }
  };

  useEffect(() => {
    const showStep = (step) => {
      const steps = document.querySelectorAll('.step');
      const stepIndicators = document.querySelectorAll('.steps li');
      steps.forEach((el, index) => {
        el.classList.toggle('active', index === step);
      });
      stepIndicators.forEach((el, index) => {
        el.classList.toggle('active', index === step);
      });
    };

    showStep(currentStep);
  }, [currentStep]);

  return (
    <div className="">
      <Header/>
      <ol className="steps mt-4">
        <li className="active">Étape 1</li>
        <li>Étape 2</li>
        <li>Étape 3</li>
      </ol>
      <section className='d-flex flex-column justify-content-center align-items-center mb-4'>
        <div className="container position">
          <div className="row">
            <div className="col-md-8 mx-auto rounded shadow bg-white p-4">
              <div className='row'>
                <div className='col-12'>
                  <div className='mb-3 text-center'>
                    <h1>Ajoutez vos informations</h1>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='form-wrapper'>
                    <form id="multiStepForm" onSubmit={createDispora}>
                      <div className={`step ${currentStep === 0 ? 'active' : ''}`}>
                        
                        <div className="row mb-4 justify-content-center align-items-center">
                          <div className="col-4">
                            <label>Nom</label>
                            <input type="text" className="form-control" placeholder="votre nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                          </div>
                          <div className="col-4">
                            <label>Prenom</label>
                            <input type="text" className="form-control" placeholder="votre prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                          </div>
                        </div>
                        <div className="row mb-4 justify-content-center align-items-center">
                          <div className="col-4">
                            <label>Numero de passport</label>
                            <input type="text" className="form-control" placeholder="votre numero passport" maxLength={10} value={num_passport} onChange={(e) => setNum_passport(e.target.value)} />
                          </div>
                          <div className="col-4">
                            <label>Numero de carte d'identite</label>
                            <input type="text" className="form-control" placeholder="votre NNI" maxLength={10} value={NNI} onChange={(e) => setNNI(e.target.value)} />
                          </div>
                        </div>
                        <div className='m-5'>
                        <button type="button" className="btn btn-primary next position-absolute bottom-0 end-0" onClick={() => setCurrentStep(1)}>Prochaine étape</button>
                        </div>
                      </div>
                      <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
                        
                        <div className="row mb-4 justify-content-center align-items-center">
                          <div className="col-4">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className="col-4">
                            <label>Photo</label>
                            <input type="file" className="form-control btn btn-primary" placeholder="choisir image" onChange={handleImageChange} />
                          </div>
                        </div>
                        <div className="row mb-4 justify-content-center align-items-center">
                          <div className="col-4">
                            <label>Gender</label>
                            <select className="form-select" onChange={(e) => setSex(e.target.value)}>
                              <option selected>Choisir le sexe</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="col-4">
                            <label>Adresse</label>
                            <input type="text" className="form-control" placeholder="votre adresse" value={Adresse} onChange={(e) => setAdress(e.target.value)} />
                          </div>
                        </div>
                        <div class=" d-flex justify-content-between ">
                        <button type="button" className="btn btn-secondary prev" onClick={() => setCurrentStep(0)}>Précédent</button>
                        <button type="button" className="btn btn-primary next" onClick={() => setCurrentStep(2)}>Prochaine étape</button>
                        </div>
                        
                      </div>
                      <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
                        
                        <div className="row mb-4 justify-content-center align-items-center">
                          <div className="col-4">
                            <label>Enfants</label>
                            <input type="number" className="form-control" placeholder="Enfants" value={enfant} onChange={(e) => setEnfant(e.target.value)} />
                          </div>
                          <div className="col-4">
                            <label>Pays de résidence</label>
                            <select className="form-select" onChange={(e) => setPays_residence(e.target.value)}>
                              <option selected>select pays</option>
                              {countries.map((getcountry, index) => (
                                <option value={getcountry.country_name} key={index}>{getcountry.country_name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="row mb-4 justify-content-center align-items-center">
                          <div className="col-4">
                            <label>Le travail</label>
                            <select className="form-select" onChange={(e) => setLe_travil(e.target.value)}>
                              <option selected>Choisir le travail</option>
                              <option value="CommerÇant">CommerÇant</option>
                              <option value="médecin">Médecin</option>
                              <option value="Ingénieur">Ingénieur</option>
                              <option value="Etudiant">Etudiant</option>
                              <option value="Autres">Autres</option>
                            </select>
                          </div>
                          <div className="col-4">
                            <label>Type de carte d'identité</label>
                            <select className="form-select" onChange={(e) => setType_identite(e.target.value)}>
                              <option selected>Choisir le type</option>
                              <option value="CIN">CIN</option>
                              <option value="Passeport">Passeport</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mb-4 justify-content-center align-items-center pr-5 pl-5 mr-5 ml-5">
                          <div className="col-4 w-100">
                            <PhoneInput className="" country={'us'} value={num_telphon} onChange={handleChange} inputProp={{required:true,}} id="num_telphon" placeholder="voter num_telphon" />
                            {!valid &&<p>S.V.P entre 10 Chiffer</p>}
                          </div>
                        </div>
                        <div class=" d-flex justify-content-between ">
                          <button type="button" className="btn btn-secondary prev" onClick={() => setCurrentStep(1)}>Précédent</button>
                          <button type="submit" className="btn btn-success">Registre</button>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <AppFooter/>
    </div>
  );
};

export default CreateDiaspora;
