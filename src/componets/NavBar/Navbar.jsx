import classes from './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (    
        <nav className='header'>
            <img src='https://lh3.googleusercontent.com/pw/ADCreHde4SWrrh7KkM4vmcfoXOaGB2DmdW0BJ8BWLUo9baF0Zn00djdkUDpPfWUG3xHwqXf-p0qr-Aql4oslhFB1qcsuaU93pwEQ5M9bIaUs3xQnA4F-0KA-aRw-QMXd_Bxp91aL7LuXcJ60dJG6XeJmklyu' onClick={() => navigate('/')} alt=''/> 
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