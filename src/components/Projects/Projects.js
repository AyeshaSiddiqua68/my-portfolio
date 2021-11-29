import React, { useEffect, useState } from 'react';
import Bounce from "react-reveal/Bounce";
import Fade from 'react-reveal/Fade';
import Loading from './Loading';
import SingleProject from '../SingleProject/SingleProject';


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function callApi() {
            let data = await fetch('../projects.json');
            data = await data.json();
            setProjects(data.slice(0, 5));
            setIsLoading(false);
        }
        callApi();
    }, [])

    return (
        <div className="mt-5">
            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <div>
                        <Bounce bottom cascade>
                            <h1 style={{color:"maroon"}} className="text-uppercase fw-bold  pb-3 text-center">Projects</h1>
                        </Bounce>

                        <Fade bottom>
                            {
                                projects.map(project => <SingleProject p={project}></SingleProject>)
                            }
                        </Fade>

                    </div>


            }


        </div>
    );
};

export default Projects;