import NavBar from './NavBar';
import background from '../img/header.png'
import React from "react";
import LoginBox from './LoginBox';
import logo from "../img/1.png"

var sectionStyle = {
    width: "100%",
    height: "1041px",
    backgroundImage: `url(${ background } )`,
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

const LandingPage = () => {
    return ( 
    <div  style={sectionStyle}>
        
        <NavBar/>
        
        
            <div className='container h-100 text-center'>
                <div className='row h-100'>
                    <div className='col-8 align-self-center text-light'>
                    <img src={logo} alt="" />
                    <h1>Bienvenida! vamonos de viaje!</h1>
                    <h6>Mujeres viajeras es una empresa dedicada a ofrecer experiencias seguras de viaje a grupos de mujeres</h6>
                    </div>
                    <div className='col align-self-center'><LoginBox/> </div>
                </div>
            </div>
        </div>
    
    )}
 
export default LandingPage;