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
            <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>Software Developer</small>
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
          Hello there! I'm Alban Muzanenhamo, a passionate Software Developer. With a knack for problem-solving and a love for elegant code, I specialize in crafting robust applications using a blend of C#, JavaScript, and Kendo UI.
          My journey into the world of software development began with a curiosity for technology and a desire to make an impact. Armed with a BSc in Information Technology, specialized in Software Development, I embarked on a path that has led me to where I am today.
          I thrive in a dynamic environment where every line of code presents an opportunity to innovate. Leveraging my expertise in C#, JavaScript, and Ajax functions, I architect scalable solutions that meet both user needs and business objectives. My proficiency extends to SQL and MSSMS database management, ensuring data integrity and performance are always top priorities.
          In addition to my technical skills, I'm well-versed in the tools and platforms that facilitate modern software development. I have extensive experience with Azure DevOps, streamlining our development workflow and ensuring seamless collaboration across teams. Furthermore, I'm proficient in GitHub, utilizing version control to manage code repositories and facilitate efficient collaboration.
          Beyond development, I'm passionate about data visualization and analysis. I harness the power of Power BI to create insightful reports that empower decision-makers within the company, providing actionable insights at a glance.
          In addition to crafting code that stands the test of time, I'm a firm believer in the importance of quality assurance. That's why I take pride in writing comprehensive unit tests to ensure the reliability and maintainability of our applications.
          When I'm not immersed in code, you can find me exploring the latest trends and technologies in the software development landscape. I'm committed to continuous learning, always seeking to expand my skill set and stay ahead of the curve.
          I'm excited about the endless possibilities that lie ahead in the world of software development, and I'm eager to collaborate with like-minded individuals who share my passion for innovation and excellence.

          Let's build the future, one line of code at a time.
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>
    
    
    </section>
  )
}

export default About