import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import MyForm from './MyForm';

const Contact = () => {
    return (
        <div style={{
            backgroundColor: '#262626'
        }}
        className=" text-white pt-5" >
            <div className="container ">
            <div className="pb-5 pt-3 text-center">
                <h1>
                <Zoom left>
                        <span  className="project-header text-white my-border-bottom">
                            <FontAwesomeIcon icon={faPaperPlane} /> Get In Touch
                        </span>
                        <div className="project-hr" ></div>
                    </Zoom>
                </h1>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-3 fw-bold">Contact With Me</h4>
                    <MyForm></MyForm>
                </div>
                <div className="col-md-6 my-2 text-center">
                    <h4 className="fw-bold">Also Find Me</h4>
                   <hr />

                    <div className="mt-4 ">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Mirpur, Dhaka-1216, Bangladesh.</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +8801765208406</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> ayeshasiddiqua.dev@gmail.com</p>

                        <p>
                            <a href="https://www.linkedin.com/in/ayesha-siddqua-9686221a0/" rel="noreferrer" target="_blank" className="btn btn-linkedIn me-2 ">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                            <a href="https://www.facebook.com/akhiazad.jnu/" rel="noreferrer" target="_blank" className="btn btn-twitter me-2">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </a>
                            <a href="https://github.com/AyeshaSiddiqua68" rel="noreferrer" target="_blank" className="btn btn-github me-2">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;