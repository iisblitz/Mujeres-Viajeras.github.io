import { useState} from "react"

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
    <div>
        <h1>Register</h1>

        <form onSubmit={registerUser}>
            <input 
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            type="text" 
            placeholder="Nombre de usuario (apodo)"
            >Apodo</input>
            <br />
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="text" 
            placeholder="Nombre"
            >nombre completo:</input>
            <br />
            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type="email" 
            placeholder="Email"
            >Email:</input>
            <br />
            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="text" 
            placeholder="Contraseña"
            >Constraseña</input>
            <br />
            <input 
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            type="text" 
            placeholder="Edad"
            >Edad:</input>
            <br />
            <input 
            value={origin}
            onChange={(e)=> setOrigin(e.target.value)}
            type="text" 
            placeholder="Origen"
            >origin</input>
            <br />
            <input 
            value={telephone}
            onChange={(e)=> setTelephone(e.target.value)}
            type="text" 
            placeholder="Telefono"
            >telefono</input>
            <br />
            <input 
            value={imgPic}
            onChange={(e)=> setImgPic(e.target.value)}
            type="text" 
            placeholder="imagen de perfil"
            >Imagen de perfil</input>
        </form>



    </div> );
}
 
export default Register;