import React from 'react'
import RESUME_ALBAN from '../../assets/RESUME_ALBAN.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={RESUME_ALBAN} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        
       
    </div>
  )
}

export default CTA