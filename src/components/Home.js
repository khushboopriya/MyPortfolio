import React from 'react';
import portfolioimg from '../images/picportfolio.jpg';
import './Home.css';
import Navbar from './Navbar';
import sample from '../images/my_bg.mov';
import resume from '../images/ResumeKhushbooPriya__.pdf';
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
                    <div className="about-content">
                    <div>
                        <img className="portfolio-pic" src={portfolioimg} alt="khushboo"/>
                    </div>
                    <div>
                        <p className="AboutMe">
                        I am currently working as a Senior Analyst in Capgemini.  
                        </p>
                        <p >
                        I am a 2020 graduate from IIIT Naya Raipur with majors in Computer Science and Engineering with cpga of 8.67, have worked on various machine learning and development projects.
                        </p>
                        <p>
                        Solving real life problems with help of technology is something I love. Apart from that, I love painting,watching movies and working out in my free time.
                        </p>

                        <p className="resume">
                            <a href={resume} className="button-cv" download><i class="fa fa-download"></i>Download CV</a>
                        </p>


                    </div>

                    </div>
                    

                </div>

            </div>
            

            </>
          
          
            );
      }
}
    
export default Home;