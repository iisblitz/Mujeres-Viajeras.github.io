import logo from "../img/1.png"
import React from "react";
import login from "../img/auth.jpg"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
<div>

<div className="h-25 d-inline-block text-center">
    <img src={logo} alt="mujeres viajeras" className="mx-auto d-block" />
</div>


<div className="d-flex justify-content-evenly vh-100">
<div className="pt-5 container-fluid" >
    <h3>Welcome lorem ipsum</h3>
    </div>



<form>
<div className="p-5" >
    <h1 className="p-5 m-5">Por favor ingresar</h1>
    <div className="form-floating">
        <input type="e-mail" className="form-control" id="floatingInput" placeholder="Email address"/>
        <label for="flotingInput">Email address</label>
    </div>

    <div className="form-floating">
        <input type="password" class="form-control" id="flotingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember" />"Remember me"
        </label>
    </div>

    <button class="w-100 btn-lg" type="submit">Entrar</button>
    <button class="w-100 btn-lg" type="submit">Crear Usuario</button>
    <img width="200px" src={login} alt="" />

   
</div>
</form>

</div>
<Link to="/home">skip</Link>

</div>






    );
}
 
export default LandingPage;