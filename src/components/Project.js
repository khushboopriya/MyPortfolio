import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Project.css';
import Navbar from './Navbar';
import sample from '../images/my_bg.mov';


const Project = ({title,description,poster,githublink,demolink,techstack}) => {
    return (
    <>

        <video className='videoTag' autoPlay loop muted
        style={{
            position:"fixed",
            width: "100vw",
            // left:"50%",
            // top:"50%",
            height:"100vh",
            objectFit:"cover",
            // transform:"transalte(-50%,-50%)",
             zIndex:"-1"
            

        }
        }>
        <source src={sample} type='video/mp4' />
            </video>

        

    <div className="project">
        <img src={poster} alt={title}/>
        <div className="title">
            <p>{title}</p>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        <div className="skill-block"> 
            <p className="techstack">
                TechStack
            </p>
            <div className="skill-row">
                {techstack.map(txt => <span className="skill">{txt}</span>)}
            </div>
        </div>
        
        <div className="buttons">
            <a href={githublink}> Source Code</a>
            <a href={demolink}> Live Demo</a>
        </div>
        

    </div>

    </>
    );
}
export default Project;