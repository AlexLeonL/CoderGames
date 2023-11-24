import classes from './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (    
        <nav className='header'>
            <img src='https://alexleon.pw/img/logo.png' onClick={() => navigate('/')} alt=''/> 
             <section className='navbar'> 
             <ul className='nav navbar-nav'>
                <li><NavLink to='/category/juegosps5' className={({ isActive }) => isActive ? classes.active : ''}> Juegos PS5</NavLink></li>
                <li><NavLink to='/category/juegosps4' className={({ isActive }) => isActive ? classes.active : ''}>Juegos PS4</NavLink></li>
                <li><NavLink to='/category/juegosps3' className={({ isActive }) => isActive ? classes.active : ''}>Juegos PS3</NavLink></li>
                <li><NavLink to='./' className={({ isActive }) => isActive ? classes.active : ''}>Xbox</NavLink></li>
                <li><NavLink to='./' className={({ isActive }) => isActive ? classes.active : ''}>Nintento</NavLink></li>
                <li><NavLink to='./' className={({ isActive }) => isActive ? classes.active : ''}>Contacto</NavLink></li>
            </ul>
            </section>
            <CartWidget />
        </nav>
    );
};

export default Navbar;