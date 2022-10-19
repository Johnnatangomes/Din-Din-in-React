import Logo from '../../img/logo-footer.png';
import Link from '../Link'

import './footer.css';


function Footer() {
    return(
        <footer className='footer'>
            <img src={Logo} alt="logo"/>
                <Link texto= "Cursos" redirect= "/cursos"/> 
                <Link texto= "Blog" redirect= "/blog"/> 
                <Link texto= "Contato" redirect= "/contato"/> 
                <button> quero ser prof </button>
                <button> aqui tem outro link </button>
        </footer>
    )

}
export default Footer;