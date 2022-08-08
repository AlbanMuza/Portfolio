import React from 'react'
import './About.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {GrCertificate} from 'react-icons/gr' 
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Me'/> 
          </div> 
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>Intern System Developer</small>
            </article>

            <article className='about__card'>
            <GrCertificate className='about__icons'/>
            <h5>Certificate</h5>
            <small>Richfield Graduate Collage</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icons'/>
            <h5>Projects</h5>
            <small>5+ Projects</small>
            </article>
          </div>
          <p>
          I am a self-motivated, result-driven developer who prioritizes the effectiveness, usability, and optimized performance of applications. Disciplined and organized with a tendency to code with a modular structure to increase the reusability and scalability of functional components. I am a recent graduate student with enthusiasm to learn, grow and improve my career prospects as a System Developer.
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>
    
    
    </section>
  )
}

export default About