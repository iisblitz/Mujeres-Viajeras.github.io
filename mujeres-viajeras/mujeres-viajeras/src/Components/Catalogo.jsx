import ex1 from '../img/ex-1.jpg'
import ex2 from '../img/ex-2.jpg'
import ex3 from '../img/ex-3.jpg'
import ex4 from '../img/ex-4.jpg'
import NavBar from './NavBar'
import Filters from './Filter'

const Catalogo = () => {
    
    
    return (
      <div>
        <NavBar/>


        <div className='container-fluid h-100'>
          <div className='row'>
            <div className='col'><Filters /></div>
            <div className='col-8'>
             <li className=''>
              <div className='wrap'>
                <div className='row'>
                  <div className='col'>
                  <img src={ex1} alt="" height="100px" width="100px" />
                  </div>
                  <div className='col-9'>
                    <div className='row'>Descripción: lorem ipsum etc....</div>
                    <div className='row'>Precio: $80085</div>
                    <div className='row'>Disponibilidad: disponible, no se, es un ejemplo</div>
                  </div>
                </div>
              </div>
             </li>
            
            </div>
          </div>
        </div>
      </div>);
}
 
export default Catalogo;