import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Project.css'


const Project = ({title,description,poster,githublink,demolink,techstack}) => {
    let history = useHistory();
    return (
    <div className="project">
        <img src={poster} alt={title}/>
        <div className="title">
            <p>{title}</p>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        <div className="skill-row">
            {techstack.map(txt => <span className="skill">{txt}</span>)}
        </div>
        <div className="buttons">
            <a href={githublink}> Code</a>
            <a href={demolink}> Demo</a>
        </div>
        

    </div>
    );
}
export default Project;