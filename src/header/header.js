import React from 'react';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>React App</h1>
            <nav>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/contact' exact>Contact us</NavLink>
                <NavLink to='/about-us' exact>About</NavLink>
            </nav>
        </header>
    )
}