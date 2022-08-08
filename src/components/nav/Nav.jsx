import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'
import {useState} from 'react'

function Nav() {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiTwotoneHome/></a> 
      <a href='#about'  onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a> 
      <a href='#experience'  onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsBriefcaseFill/></a> 
      <a href='#portfolio'  onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><RiServiceFill/></a> 
      <a href='#contact'  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><RiContactsFill/></a> 

    </nav>
  )
}

export default Nav