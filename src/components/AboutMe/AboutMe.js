import { faCode, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import Flip from 'react-reveal/Flip';
import profile from '../../images/profile/47.jpg'
import Navbar from '../Navbar/Navbar';


const AboutMe = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mb-5">
                <div className="py-5 text-center">
                    <h2>
                        <Flip top cascade>
                            <span style={{ color: "maroon" }} className=" fw-bold pb-2 ">
                                <FontAwesomeIcon icon={faUser} /> ABOUT ME
                            </span>
                        </Flip>
                    </h2>
                </div>

                <div className="container about-container">

                    <Fade bottom >
                        <section>
                            <div className="text-center">
                                <h4 className="fw-bold py-2 fw-bold">
                                    <FontAwesomeIcon icon={faIdCard} /> MySelf
                                </h4>
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-3 my-2 text-center">
                                    <div>
                                        <img className="rounded-circle img-fluid" src={profile} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-9 my-2 text-center ">
                                    <p className="ms-2 text-center ">
                                        Hi there! I'm Mst. Ayesha Siddiqua, a Frond-End Web Application Developer. I have completed my bachelor’s degree in Computer Science and Engineering (CSE) from Jagannath University, Dhaka. Besides my education, I have trained myself with a web development course in "Programming Hero" by Jhankar Mahbub sir. I have done several projects using React, JavaScript, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. As a  Front-End React Developer position my keen attention to detail and designing knowledge will be an added advantage for me to serve any company with a quality service. Outside of front-end development, I'm enhancing my back-end skill to be a full stack developer in future.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Fade>


                    <Fade bottom >
                        <section className="about-section py-2" >
                            <div className="text-center">
                                <h4 className="fw-bold py-2 fw-bold">
                                    <FontAwesomeIcon icon={faCode} /> Skills
                                </h4>
                            </div>
                            <div className="row text-center pt-5">
                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">HTML5</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">CSS3</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-bootstrap-plain colored display-4"></i>
                                        <p className="fw-bold">Bootstrap 5</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-tailwindcss-plain colored display-4"></i>
                                        <p className="fw-bold">Tailwind CSS</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-materialui-plain colored display-4"></i>
                                        <p className="fw-bold">Material UI</p>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-javascript-plain colored display-4"></i>
                                        <p className="fw-bold">JavaScript</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-react-original colored display-4"></i>
                                        <p className="fw-bold">React</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-nodejs-plain colored display-4"></i>
                                        <p className="fw-bold">Node.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-express-original colored display-4"></i>
                                        <p className="fw-bold">Express.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-mongodb-plain colored display-4"></i>
                                        <p className="fw-bold">MongoDB</p>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </Fade>


                    <Fade bottom>
                        <section className="my-2">
                            <div className="text-center">
                                <h4 className="fw-bold py-2 fw-bold">
                                    <FontAwesomeIcon icon={faUserGraduate} /> Education
                                </h4>
                            </div>
                            <div className="row mt-3">

                                <div className="text-center">
                                    <p className="fw-bold my-0">Jagannath University</p>
                                    <p className="my-0">BSc in Computer Science and Engineering (CSE) </p>
                                    <p className="my-0">Passing Year: 2018 </p>
                                    <p className="my-0">Result: CGPA (3.34) </p>
                                </div>
                            </div>

                        </section>
                    </Fade>


                </div>
            </div >
        </>
    );
};

export default AboutMe;