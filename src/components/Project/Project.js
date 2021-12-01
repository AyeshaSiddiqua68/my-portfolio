import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Container } from 'react-bootstrap';
import './Project.css';

const Project = () => {
    const { projectId } = useParams();

    const [projectDetails, setProjectDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [])

    useEffect(() => {
        if (projectDetails.length > 0) {
            const matchedData = projectDetails.find(detail => detail.id == projectId)
            setSpecificDetails(matchedData);
        }
    }, [projectDetails])

    console.log(specificDetails);
    return (
        <div style={{
            backgroundColor: '#262626',
            minHeight: '100vh'
        }}>
            <h2 className="text-white text-center pt-5">Welcome to <span style={{color:"maroon"}}>{specificDetails.name}</span> Details Page</h2>
            {/* <div className=" text-center">
                <Link to="/"> <button className=" back-home">Back to Home</button> </Link>

            </div> */}
            <Container>
                <div>
                    <Carousel fade>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    src={specificDetails?.featureImg}
                                    alt="First slide"
                                />
                            </div>


                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    src={specificDetails?.img1}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    src={specificDetails?.img2}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    src={specificDetails?.img3}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    src={specificDetails?.img4}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>

                    </Carousel>
                </div>
                <br />
                <br />
                <br />
                <h2 className="text-white text-center">Description</h2>
                <div className="project-hr" ></div>
                <br />
                <ul className="text-white details-list">
                    <li>{specificDetails?.details?.p1}</li>
                    <li>{specificDetails?.details?.p2}</li>
                    <li>{specificDetails?.details?.p3}</li>
                    <li>{specificDetails?.details?.p4}</li>
                </ul>
                <br />
                <br />
                <br />
                <h2 className="text-white text-center">Technology Used</h2>
                <div className="project-hr" ></div>
                <br />
                <p className="text-white text-center">{specificDetails?.technology}</p>
                <br />
                <br />
                <br />
                <div className="text-center ">
                <a href={specificDetails?.codeLink} target="_blank" rel="noreferrer"><button className="back-home">
                                                Client Code
                                            </button></a>
                                            &nbsp; &nbsp;
                                            <a href={specificDetails?.server} target="_blank" rel="noreferrer"><button className="back-home">
                                                Server Code
                                            </button></a>
                                            &nbsp; &nbsp;
                </div>

            </Container>



        </div>
    );
};

export default Project;