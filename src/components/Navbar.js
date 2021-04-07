import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component{

render(){
    return (
    <>
       <div className="navbar">
       <Link to="/" className="Home"><i class="fa fa-film"></i> Home</Link>
       <Link to="/projects" className="Home">Projects</Link>
       <Link to="/contact" className="Home">Contact</Link>
       </div>
    </>
    )
 }
}

export default Navbar;