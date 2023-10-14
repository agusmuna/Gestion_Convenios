// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import miLogo from './Logo.png'
import { Link } from "react-router-dom";
import './Home.css'
export function Home(){

  useEffect(()=>{
    const datos_usuario = JSON.parse(localStorage.getItem('usuario'));

    if(datos_usuario){
        window.location.href='/principal';
        return;
    }
    
},[])

    return(
        <>
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
              <div>
                <h3 className="float-md-start mb-0">Gestion De Convenios</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                 <td> <a className="nav-link fw-bold py-1 px-0"><Link className="btn btn-dark w-100 py-2" to="/login">Iniciar sesión</Link></a> </td> 

                 <a className="nav-link fw-bold py-1 px-0"><Link className="btn btn-dark w-100 py-2" to="/registro">Registro</Link></a> 
                  
                </nav>
              </div>
            </header>

            <main className="px-3">
            <a>
                    <img src={miLogo} className="logo" alt="Mi Logo" />
                  </a>
              <h1>Bienvenido.</h1>
              <p className="lead">
¡Bienvenidos a nuestra plataforma de Gestión de Convenios! Simplificamos y optimizamos la administración de acuerdos y contratos. Descubre herramientas intuitivas y eficaces para potenciar tus convenios. ¡Comencemos juntos!</p>
              {/* <p className="lead">
                <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
              </p> */}
            </main>

            <footer className="mt-auto text-white-50">
              <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>.</p>
            </footer>
          </div>



        </>
    )
}