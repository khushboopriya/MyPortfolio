import React from 'react';
import portfolioimg from '../images/picportfolio.jpg';
import './Home.css';
import Navbar from './Navbar';
import sample from '../images/my_bg.mov';
class Home extends React.Component {

    render() {
        return (
            <>

            <div className="flexmain">
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
                <div className="about-section">
                    <div>
                        <img className="portfolio-pic" src={portfolioimg} alt="khushboo"/>
                    </div>
                    <div>
                        <p className="AboutMe">
                        I am currently working as a Senior Analyst in Capgemini.   
                        </p>
                        <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                        </p>

                    </div>

                </div>

            </div>
            

            </>
          
          
            );
      }
}
    
export default Home;