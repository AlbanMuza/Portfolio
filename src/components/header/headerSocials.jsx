import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/alban-muzanenhamo-936332181' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/AlbanMuza' target="_blank"><FaGithubAlt/></a>
        <a href='https://dribbble.com' target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials