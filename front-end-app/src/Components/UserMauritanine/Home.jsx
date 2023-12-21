import React from 'react'
import { Button } from 'react-bootstrap'

import { BrowserRouter as Router, Routes,Route,Link, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import "./Home.css";
import  imag3 from './imag3.jpg'
import Authuser from '../Adminstrateur/Authuser';
import Login from '../Adminstrateur/Login';
import AppFooter from '../Adminstrateur/AppFooter';






export default function Home(){

  return (
   <body className='Hom2'>
    
   
    <Header/>
  
        
    <section>
        
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-5 pt-lg-50 px-50 px-lg-7">
                <div className='dive1'>
                <h1 className="mb-3 mt-20 fs-38 d-flex flex-column flex-lg-row w-100 justify-content-center justify-content-lg-start align-items-center">

                    
                    <span>Bienvenue sur la plateforme des Mauritaniens de l'étranger</span>
                    
                </h1>
                <p className="h5 mb-40 pe-lg-40 text-center text-lg-start">
                La plateforme permet à tous les Mauritaniens de l'étranger de s'y inscrire
                </p>

                <div className="row gap-20">

                <div className=''>
        
                <Link to={"/ajouter-Diaspora"}><Button className='Button1'>
                Inscrption dans le platform diaspora
                </Button>
                </Link>
        
    </div>    
                </div>
            </div>
            </div>
            <div className="col-12 col-lg-7">
                <img className="img-fluid" src={imag3} alt=""></img> 
            </div>
        </div>
</div>

        </section> 
    
   
  
   
        <AppFooter/>
    </body> 
    
  
  )
}



