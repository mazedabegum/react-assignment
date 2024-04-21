import React from 'react';

import  "./Header.css";

const Header = () => {
    return (
        <div className='Header'>
            <h1>Mazeda</h1>
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Services">Services</a>
                </li>
                <li>
                    <a href="/Blog">Blog</a>
                </li>
                <li>
                    <a href="Contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;