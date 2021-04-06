import React from 'react';
import axios from  'axios';
import Navbar from './Navbar.js'
import Project from './Project.js'
import './ProjectPage.css'

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[]
        };
    }

    componentDidMount() {
        axios.get(`api/projects`)
        .then(response => {
            console.log(response.data);

            let newArray = [];
            let uniqueObject = {};
            for(let i in response.data){
                let objname = response.data[i].title;
                uniqueObject[objname] = response.data[i];
            }
            for (let i in uniqueObject){
                newArray.push(uniqueObject[i]);
            }
            console.log(newArray);
            console.log(uniqueObject);

            this.setState((prevState)=>({
                ...prevState,
                projects:newArray
              }),()=>{
                console.log(this.state.projects.length);
                console.log(this.state.projects);
              })
        });
    }


    
    
    render() {
        return(
            <>
            <Navbar/>
            
            
                <div className="projects-container">
                  {this.state.projects.length>0 && this.state.projects.map(project =>(<Project key={project.title} {...project}  />))}
                </div>
            </>
        );
    }

}

export default ProjectPage;