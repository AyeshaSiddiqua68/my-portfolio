import React from 'react';
import './Header.css'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="full-header">
            <div className="main-header">
                <h1>WEB DESIGN AND DEVELOPMENT</h1>
                <Typed
                className="text"
                strings={["Web Developer", "Front-End Developer", "Software Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main">
                    CONTACT ME
                </a>
            </div>
        </div>
    );
};

export default Header;