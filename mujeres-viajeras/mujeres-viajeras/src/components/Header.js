import Link from 'next/link'
import Image from 'next/image';
import Logo from'../../styles/1.png';

const Header = () => {
    return (
        <div>
            <header>
                <div className="NavBar">
                <Image alt='logo' src={Logo} height={150} href="/homepage"></Image>
                </div>
            <nav className='topNav'>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                </ul>
                <ul>
                    <li><Link href='/'>Catalog</Link></li>
                </ul>
                <ul>
                    <li><Link href='/'>Perfil</Link></li>
                </ul>
                <ul>
                    <li><Link href='/'>Blog</Link></li>
                </ul>
                <ul>
                    <li><Link href='/about-us'>About-us</Link></li>
                </ul>
            </nav>
            
            </header>
        
        </div>
      );
}
 
export default Header;