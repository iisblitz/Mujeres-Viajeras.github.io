import {Link} from 'react-router-dom'
import insta from "../img/insta login.jpg"
import {useState} from 'react'
const LoginBox = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
        return ( <div>

        <div className="container bg-light border-0-secondary rounded my-4 p-1">
        <form action="submit">
        Correo:
        <br />
        <br />
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}    
        type="email"
        placeholder="Email"
        ></input>
        <br/>
        <br />
        Password
        <br />
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type='password'
        placeholder="Password"
        ></input>
        <br />
        <br />
        <input type="submit" value="Login" />
        <Link to='/Register'>
        <button className='mx-2 border secundary' > Register </button>
        </Link>
        <br />
        
        <img src={insta} className="my-4" alt="instagram login" width="250px" />

        </form>
        </div>



    </div> );
}
 
export default LoginBox;