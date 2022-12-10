import logo from "../img/1.png"


const NavBar = () => {
    return ( <div>
<nav className="navbar navbar-expand-lg navbar-light text-capitalize">
    
    <div className="container-xxl">
        <a className="navbar-brand"><img src={logo} height="100px" alt="#" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="show-menu">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">about</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">travel agency</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">contact us</a>
                </li>
                <li className="nav-item .search-container">
                    <a className="nav-link search" ><i className="fas fa-search"></i></a>
                    <form>
                        <input type="search"/>
                    </form>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-user"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-heart"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div> );
}
 
export default NavBar;