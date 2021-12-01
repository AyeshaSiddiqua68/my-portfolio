import React from 'react';
import './Header.css'
import Typed from 'react-typed';
import {  faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="full-header">
            <div className="main-header fw-bold">
                <h1 className="text-white">Hi! I'm <span style={{color:"maroon"}}>AYESHA SIDDIQUA</span></h1>
                <Typed
                className="text"
                strings={["Web Developer", "Front-End Developer", "Full Stack Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a style={{color:"maroon", backgroundColor:"white"}} href="https://drive.google.com/uc?export=download&id=1whXlNAAocdQFn-tByQItHFeTFmbLoxhE" type="button" className="btn btnDwnResume mt-4 fw-bold">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
                        </a>
            </div>
        </div>
    );
};

export default Header;