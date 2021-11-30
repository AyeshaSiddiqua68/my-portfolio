import {  faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flip from 'react-reveal/Flip';
import Navbar from '../Navbar/Navbar';

const Blog = () => {

    return (
        
        <>
        <Navbar></Navbar>
        <div className="container">
            <div className="py-5 text-center">
                <h2>
                    <Flip top cascade>
                        <span style={{color:"maroon"}} className="pb-2 fw-bold ">
                            <FontAwesomeIcon icon={faFeatherAlt} /> My Blogs
                        </span>
                    </Flip>
                </h2>
            </div>
            <div className="mt-5 text-center">
                <h4>Blogs are coming soon....</h4>
            </div>
            
        </div>
        </>

    );
};

export default Blog;