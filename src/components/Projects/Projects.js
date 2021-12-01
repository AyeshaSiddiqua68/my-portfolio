import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (

        <div className=" pb-5"
            style={{
                backgroundColor: '#262626'
            }}
            id="projects"
           
        >
            <Container>
                <Zoom left>
                    <h1 className="text-center fw-bold project-header">Recent Projects</h1>

                    <div className="project-hr" ></div>
                </Zoom>

                

                <div className="row">
                    {
                        projects?.map(project => (
                            <div className="col-lg-4">
                                <Fade top>
                                    <div className="project">
                                        <div className="project-img">
                                            <img src={project?.featureImg} alt="" />
                                        </div>
                                        <div className="project-details">

                                            <h4 className="text-white my-2">{project?.name}</h4>

                                            <div >
                                            <a href={project?.liveLink} target="_blank" rel="noreferrer"><button className="project-button">
                                                Livesite
                                            </button></a>
                                            &nbsp; &nbsp;

                                            <Link to={`/project/${project?.id}`}>
                                                <button className="project-button">Details</button>
                                            </Link>
                                            </div>

                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Projects;