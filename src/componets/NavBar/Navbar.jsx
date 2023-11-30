import { Component } from "react";
import { MenuData } from "./MenuData";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked:
        !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <div className="logo">
              <a href="/."><img src='https://alexleon.pw/img/logo.png' alt=''/> </a></div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index)=>{
                        return (
                            <li key={index}>
                                <NavLink to={item.url} className={item.cName}>{item.title}</NavLink>
                            </li>
                        )
                    })}  
                     <CartWidget/>
                </ul>
               
            </nav>
        );
            
        
    }
}

export default Navbar