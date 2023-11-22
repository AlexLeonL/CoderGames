import classes from './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (    
        <nav className='header'>
            <img src='https://alexleon.pw/img/logo.png' onClick={() => navigate('/')} alt=''/> 
             <section className='navbar'> 
                <NavLink to='/category/juegosps5' className={({ isActive }) => isActive ? classes.active : ''}>
                 Juegos PS5
                </NavLink>
                <NavLink to='/category/juegosps4' className={({ isActive }) => isActive ? classes.active : ''}>
                Juegos PS4
                </NavLink>
                <NavLink to='/category/juegosps3' className={({ isActive }) => isActive ? classes.active : ''}>
                Juegos PS3
                </NavLink>
                <NavLink to='./' className={({ isActive }) => isActive ? classes.active : ''}>
                Contacto
                </NavLink>
            </section>
            <CartWidget />
        </nav>
    );
};

export default Navbar;