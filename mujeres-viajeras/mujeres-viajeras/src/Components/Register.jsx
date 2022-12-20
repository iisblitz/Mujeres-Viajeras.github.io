import { useState} from "react"
import NavBar from './NavBar'
import BG from "../img/woman.jpg"


var sectionStyle = {
    width: "100%",
    height: "1041px",
    backgroundImage: `url(${ BG } )`,
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };


const Register = () => {
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [origin, setOrigin] = useState('')
    const [telephone, setTelephone] = useState('')
    const [ imgPic, setImgPic] = useState('')


    async function registerUser(event){
        event.preventDefault()

        const response = await fetch ('http://localhost:5000/users/add',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userName,
                name,
                email,
                password,
                age,
                origin,
                telephone,
                imgPic
            })
        })
        const data = await response.json()

        if(data.status === 'ok'){
            window.location.href='/Home'
        }

    }
    return ( 
    <div style={sectionStyle}>
        <NavBar/>

        <div className="container w-25 text-center bg-light ">
        <h1>Registro</h1>

        <form onSubmit={registerUser}>
            <div className="mb-1">
            <label for='userName' className="form-label">Elige un apodo</label>
            <br />
            <input 
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            type="text" 
            placeholder="Nombre de usuario (apodo)"
            ></input>
            </div>

            <br />
            
            <div className="mb-1">
            <label for="name" className="form-label">¿Como te llamas?</label>
            <br />
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="text" 
            placeholder="Nombre"
            ></input>
            </div>
            <br />

            <div className="mb-1">
            <label for="email" className="form-label">¿Cual es tu mail?</label>
            <br />
            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type="email" 
            placeholder="Email"
            ></input>
            </div>
            <br />
            
            <div className="mb-1"></div>
            <label for="password">Elige una contraseña:</label>
            <br />
            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="text" 
            placeholder="Contraseña"
            ></input>
            <br />
            <div className="mb-1">
            <label for="age">Fecha de nacimiento:</label>
            <br />
            <input 
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            type="text" 
            placeholder="Edad"
            ></input>    
            </div>
            
            
            <br />

            <div className="mb-1">
            <label for="origin" value="">En que ciudad vives?</label>
            <br />
            <input 
            value={origin}
            onChange={(e)=> setOrigin(e.target.value)}
            type="text" 
            placeholder="Origen"
            ></input>
            </div>
            <br />
            <h5>¿Cual es tu número telefonico?</h5>
            <input 
            value={telephone}
            onChange={(e)=> setTelephone(e.target.value)}
            type="text" 
            placeholder="Telefono"
            ></input>
            <br />
            <h5>Elige una imagen de perfil</h5>
            <input 
            value={imgPic}
            onChange={(e)=> setImgPic(e.target.value)}
            type="text" 
            placeholder="imagen de perfil"
            ></input>

            <input type="submit" value="upload" />
            <br />
            <input type="submit" value="register" className="mt-2"/>
        </form>


        </div>
    </div> );
}
 
export default Register;