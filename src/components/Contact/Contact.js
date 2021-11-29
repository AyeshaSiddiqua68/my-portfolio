import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Flip from 'react-reveal/Flip';
import MyForm from './MyForm';

const Contact = () => {
    return (
        <div className="container my-2">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faPaperPlane} /> Get In Touch
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <p className="mb-3 fw-bold">Contact With Me</p>
                    <MyForm></MyForm>
                </div>
                <div className="col-md-6 my-2">
                    <p className="fw-bold">Also Find Me</p>
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
    );
};

export default Contact;