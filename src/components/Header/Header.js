import React from 'react';
import './Header.css'
import Typed from 'react-typed';
import {  faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="full-header">
            <div className="main-header fw-bold">
                <h1>WEB DESIGN AND DEVELOPMENT</h1>
                <Typed
                className="text"
                strings={["Web Developer", "Front-End Developer", "Full Stack Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a style={{color:"maroon"}} href="https://drive.google.com/file/d/1whXlNAAocdQFn-tByQItHFeTFmbLoxhE/view?usp=sharing" type="button" className="btn btnDwnResume me-2 my-2 mb-md-0 fw-bold">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
                        </a>
            </div>
        </div>
    );
};

export default Header;