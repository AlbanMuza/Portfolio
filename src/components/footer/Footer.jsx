import React from 'react'
import './footer.css'
import{AiFillGithub} from 'react-icons/ai'
import{AiFillCodepenCircle} from 'react-icons/ai'
import{AiOutlineLinkedin} from 'react-icons/ai'

const Footer =()=> {
  return (
    <footer>
      <a href='#' className='footer__logo'>Alban</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href='https://github.com'><AiFillGithub/></a>
          <a href='https://codepen.com'><AiFillCodepenCircle/></a>
          <a href='https://linkedin.com'><AiOutlineLinkedin/></a>
      </div>
    <div className='footer__copyright'>
        <small>
          &copy; albanmuza@gmail.com. All rights reserved.
        </small>
    </div>

    </footer>
  )
}

export default Footer