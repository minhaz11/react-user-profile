import React from 'react';
import logo from './logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <img src={logo} alt=""/>
                <a href="/home">Home</a>
                <a href="/log in">Log in</a>
                <a href="/signUp">Sign Up</a>
               
            </nav>
           
        </div>
    );
};

export default Header;