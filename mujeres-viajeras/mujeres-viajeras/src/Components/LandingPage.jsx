import logo from "../img/1.png"
import background from "../img/header.png"
import './Styles.css'
import React from "react";
import login from "../img/auth.jpg"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
    <div>
<nav className="navbar navbar-expand-lg navbar-light text-capitalize">
    
            <div className="container">
                <a className="navbar-brand"><img src={logo} alt="#" /></a>
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


        <header id="home">
            <div className="overlay">
                <div className="container">
                    <div>
                        <h1><span>Amazing</span><br/>Santorini 10 Days Tour</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
                        <button><a  className="text-uppercase">book now</a></button>
                    </div>
                </div>
            </div>
        </header>
        
        <div className="about-us" id="about">
            <div className="small-container">
                <h2 className="text-center">Winter <span>Holiday</span></h2>
                <p className="text-center">as opposed to using 'Content here, content here', making it look lik</p>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 text-center">
                                <div className="item">
                                    <img src="../img/img2.png"/>
                                    <h5 className="text-uppercase">Restaurants</h5>
                                </div>
                                <div className="item">
                                    <img src="../img/img1.png"/>
                                    <h5 className="text-uppercase">where to stay</h5>
                                </div>
                                <div className="item">
                                    <img src="../img/img4.png"/>
                                    <div>
                                        <h5 className="text-uppercase">Sightseeing</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="../img/img3.png"/>
                                    <h5 className="text-uppercase">shops and boutiques</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 text-right">
                                <h4 className="text-uppercase">Engoy <span>holiday</span></h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like</p>
                                <button className="text-center"><a  className="text-capitalize">book now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="first"></div>
                <div className="second"></div>
            </div>
        </div>
        
        <div className="services" id="service">
            <div className="container">
                <h2 className="text-capitalize">Enjoy <span>Resort</span></h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a o</p>
            </div>
            <div className="small-container">
                <div id="slideToNext" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="../img/pic4.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="../img/pic3.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="../img/pic2.png" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev"  role="button" data-slide="prev">
                    <i className="fas fa-chevron-left fa-2x"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next"  role="button" data-slide="next">
                    <i className="fas fa-chevron-right fa-2x"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>
        </div>
        
        <div className="agency" id="agency">
            <div className="white-overlay">
                <div className="container">
                    <div>
                        <img src="../img/airplane.png"/>
                        <div>
                            <img src="../img/pic1.png"/>
                            <h2 className="text-center text-uppercase">Enjoy <br/> All <br/> World</h2>
                        </div>
                        <img src="../img/airplane.png"/>
                    </div>
                    <p className="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look likeIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as o</p>
                </div>
            </div>
        </div>
        
        <div className="statistics text-capitalize text-center font-weight-bold">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fas fa-umbrella-beach fa-3x"></i>
                        <h3>425</h3>
                        <p>Tourists</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fas fa-birthday-cake fa-3x"></i>
                        <h3>125</h3>
                        <p>years</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fa fa-home fa-3x"></i>
                        <h3>325</h3>
                        <p>cottages</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fas fa-glass-cheers fa-3x"></i>
                        <h3>120</h3>
                        <p>restaurants</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="contact" id="contact">
            <div className="violet-overlay">
                <div className="container">
                    <h2 className="text-center">Get in touch</h2>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Phone"/>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="SEND"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <div className="container">
                <ul>
                    <li><a ><i className="fab fa-facebook-f"></i></a></li>
                    <li><a ><i className="fab fa-twitter"></i></a></li>
                    <li><a ><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a ><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">Contact us</h4>
                            <p className="address">
                                123 Second Street Fifth <br/>
                                Avenue,<br/>
                                Manhattan, New York<br/>
                                +987 654 3210
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">additional links</h4>
                            <ul>
                                <li><a >About us</a></li>
                                <li><a >Terms and conditions</a></li>
                                <li><a >Privacy policy</a></li>
                                <li><a >News</a></li>
                                <li><a >Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item date">
                            <h4 className="text-uppercase">resent posts</h4>
                            <p><a >01/03/2019</a></p>
                            <p><a >08/05/2019</a></p>
                            <p><a >01/03/2019</a></p>
                            <p><a >08/05/2019</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">newsletter</h4>
                            <form>
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center">
                <p>Copyright 2019  Design by <a >Free Html Templates</a></p>
            </div>
        </footer>

    </div>
    )}
 
export default LandingPage;