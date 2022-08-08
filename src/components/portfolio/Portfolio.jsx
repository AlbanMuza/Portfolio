import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'RoboFriends-React',
    github:'https://github.com/AlbanMuza/robotfriend',
    demo:'https://62f0f2cc8b5f9f6988324dcb--unrivaled-empanada-f20b33.netlify.app/'
  },
  {
    id:2,
    image:IMG4,
    title:'Dashboard',
    github:'https://github.com/AlbanMuza/restaurent-react',
    demo:'https://62ebe28e7145de2e7aa6b133--shiny-quokka-9a2cf2.netlify.app/'
  },
  {
    id:3,
    image:IMG6,
    title:'Smart-Brain(Face detection)',
    github:'https://github.com/AlbanMuza/face-rec-app',
    demo:'https://poetic-cupcake-474083.netlify.app/'
  },
  {
    id:4,
    image:IMG2,
    title:'Restaurent-react',
    github:'https://github.com/AlbanMuza/restaurent-react',
    demo:'https://github.com/AlbanMuza/restaurent-react'
  },
   {
    id:5,
    image:IMG5,
    title:'Background-Generator',
    github:'https://github.com/AlbanMuza/background-generator',
    demo:''
  },
   {
    id:6,
    image:IMG3,
    title:'Car Sale',
    github:'https://github.com/AlbanMuza/CarSale',
    demo:'https://github.com/AlbanMuza/CarSale'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
         <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt=''/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
            )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio