import React, { Component } from 'react';
import { MenuItems} from "./MenuItems"
import { Button } from "../Button" 
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Golf-App</h1>
                <div className="menu-icon">                    
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li> 
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar