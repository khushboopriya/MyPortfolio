import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
import Navbar from './Navbar';
import sample from '../images/my_bg.mov';

class Contact extends React.Component{

render(){
    return (
    <>
            <Navbar/>
            <video className='videoTag' autoPlay loop muted
            style={{
                position:"absolute",
                width: "100%",
                // left:"50%",
                // top:"50%",
                height:"100%",
                objectFit:"cover",
                transform:"transalte(-50%,-50%)",
                zIndex:"-1"

            }}>
                   
        <source src={sample} type='video/mp4' />
            </video>
       <div class="middle">
        <h2>Get In Touch</h2>
            <a class="btn facebook" href="https://github.com/khushboopriya">
                <i class="fab fa-github"></i>
            </a>
            <a class="btn twitter" href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="btn google" href="mailto: khushboopriyaiiitnr@gmail.com">
                <i class="fab fa-google"></i>
            </a>
            <a class="btn instagram" href="https://www.instagram.com/khush_b_hoon/">
                <i class="fab fa-instagram"></i>
            </a>
            <a class="btn youtube" href="https://www.linkedin.com/in/khushboo-priya-530293143/">
                <i class="fab fa-linkedin"></i>
            </a>

	</div>
    </>
    )
 }
}

export default Contact;