import ex1 from '../img/ex-1.jpg'
import ex2 from '../img/ex-2.jpg'
import ex3 from '../img/ex-3.jpg'
import ex4 from '../img/ex-4.jpg'



const Catalogo = () => {
    
    
    return ( <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={ex1} className="d-block w-100" height="800px" alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <div className='bg-dark px-0'>  
            <h5>El cielo</h5>
            <p>imagen de prueba para el carrusel</p>
            </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={ex2} className="d-block w-75" alt="..." height="800px"/>
        <div className="carousel-caption d-none d-md-block">
            <div className='bg-dark'>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            </div>  
        </div>
      </div>
      <div className="carousel-item">
        <img src={ex3} className="d-block w-75" alt="..." height="800px"/>
        <div className="carousel-caption d-none d-md-block">
            <div className="bg-dark">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
          </div>  
        </div>
      </div>
      <div className="carousel-item">
        <img src={ex4} className="d-block w-100" alt="..." height="500px" width="500px"/>
        <div className="carousel-caption d-none d-md-block">
            <div className="bg-dark">
          <h5>fourth slide label</h5>
          <p>Some representative placeholder content for the fourth slide.</p>
          </div>  
        </div>
      </div>
    </div>
    <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>);
}
 
export default Catalogo;