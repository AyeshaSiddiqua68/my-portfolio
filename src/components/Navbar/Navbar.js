import React from 'react';
import logo from '../../images/navbar/logo2.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">AYESHA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              {/* <span className="navbar-toggler-icon"></span> */}
              <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white mx-2 navbar-a" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-2 navbar-a" to="/about"  aria-current="page">
                    ABOUT ME
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white mx-2 navbar-a" to="/blog"  aria-current="page">
                    BLOG
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-2 navbar-a" href="#">PROJECTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-2 navbar-a" href="#">PORTFOLIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-2 navbar-a" href="#">CONTACT</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>

      </div>
    </div>


  );
};

export default Navbar;