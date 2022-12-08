import L from "../img/logoimg.png"

const NavBar = () => {
    return ( <div>

<div className="contaner">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-center">
        <a href="localhost:3000/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <div className="bi me-2" width="20" height="20"> <img src={L} width="50px" height="50px"/> 
            <span className="fs-4">Mujeres Viajeras</span>
            </div>
        </a>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" >
            <input type="search" className="form-control" placeholder="Busqueda..." aria-label="Search" />
        </form>


        <ul className="nav nav-pills align-items-center">
            <li className="nav-item">
                <a href="#" className="nav-link btn" aria-current="page">Home</a>
            </li>

            <li className="nav-item">
                <a href="#" className="nav-link" aria-current="page">Blog</a>
            </li>

            <li className="nav-item">
                <a href="#" className="nav-link" aria-current="page">Shop</a>
            </li>

            <li className="nav-item">
                <a href="#" className="nav-link" aria-current="page">Profile</a>
            </li>
        </ul>
    </header>

</div>

    </div> );
}
 
export default NavBar;