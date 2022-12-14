import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5> 
        <h1> Alban Muzanenhamo</h1> 
        <h5 className='text-light'> System Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="ME"/>
         </div>
         <a href='#contact' className='scroll__down'>Scroll Down</a>
        
        
      </div>
    </header>
  )
}

export default Header