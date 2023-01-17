import login from '../../styles/login.png'
import Image from 'next/image';
import Link from 'next/link'

const Login = () => {
    return (
    <div>
        <form className="Login">
            <h1>Ingresa usando instagram</h1>
            <br/>
            <button><Image src={login} alt='instagram' height='100'></Image></button>
            
            <h2><Link href='/Registro/registro'>o Registrate aquí</Link></h2>
        </form>
    </div>
    );
}
 
export default Login;