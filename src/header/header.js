import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>React App</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact us</Link>
            </nav>
        </header>
    )
}