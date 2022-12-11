import logo from "../img/1.png"
import {Link} from "react-router-dom"

const NavBar = () => {
    return ( <div>

<nav className="navbar navbar-expand-lg navbar-light text-capitalize justify-content-center m-0 p-0">    
        <div className="col-3 p-0 m-auto">
            <div className="row p-0 m-0 justify-content-center">
                <div className="col d-flex justify-content-center">
                <Link to='/Home'>
                <div className="m-auto"><img src={logo} alt="mujeres viajeras"height="100px" /></div>
                </Link>
                </div>
            </div>
        </div>  
        <div className="col-3 p-0 m-auto">
            <div role="group" aria-label="Basic Example" className="d-flex">
                <Link to="/Home"><button type="button" className="btn btn-light m1"> Catalogo </button></Link>
                <Link to="/Blog"><button type="button" className="btn btn-light m1"> Blog </button></Link>
                <Link to="/Perfil"><button type="button" className="btn btn-light m1"> Perfil </button></Link>
                <Link to="/Carrito"><button type="button" className="btn btn-light m1"> Carrito </button></Link>
            </div>
        </div>              




</nav>

    </div> );
}
 
export default NavBar;