import Link from 'next/link'
import Image from 'next/image'
import Login from './Login'

export const Homepage = () => {
 return(

    <div className= "home_body">
        <div className="welcome">
            <h2>Bienvenida a mujeres viajeras!</h2>
            
            <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>
        </div>
        <div><Login/></div>
    </div>
    )
}