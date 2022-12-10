import NavBar from './NavBar';
import background from '../img/header.png'
import React from "react";

var sectionStyle = {
    width: "100%",
    height: "880px",
    backgroundImage: `url(${ background } )`,
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

const LandingPage = () => {
    return ( 
    <div >
        
        <NavBar/>
        
        <div style={ sectionStyle} className="d-flex justify-content-center">
        <div className='align-items-center'>
        <h1>Bienvenida a Mujeres viajeras!</h1>
        </div>
        </div>


        
    </div>
    )}
 
export default LandingPage;