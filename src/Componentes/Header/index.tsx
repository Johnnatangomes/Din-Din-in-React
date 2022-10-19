import Link from '../Link';

import Logo from '../../img/logo-header.png';

import "./nav.css";

function Header() {

    return (
        <header className='header'> 
        <>
        <div> 
            <img  className= "logo" src={Logo} alt="logo" />
        </div> 
        <div> 
         <nav className='nav'> 
                <Link texto= "Cursos" redirect= "/cursos"/> 
                <Link texto= "Blog" redirect= "/blog"/> 
                <Link texto= "Contato" redirect= "/contato"/> 
            </nav>
        </div>
        </>
        </header>
    )
}

export default Header;


