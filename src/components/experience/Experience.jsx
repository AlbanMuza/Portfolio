import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5> 
      <h2>My Experience</h2>

      <div className='experience__container'>
        <div className='experience__frontend'>
          <h3>Fronted Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>KendoUI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
                <div><h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>  
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
               <h4>MySQL</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>  
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Basic</small>
              </div>            
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MangoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience