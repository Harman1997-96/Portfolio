import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Gitub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>
          Contact Number:- +91 6283279860.
          <br />
          Email:-harmansoftwaredeveloper@gmail.com.
        </span>

        <div className="f-icons">
          <a href="https://www.instagram.com/harmansingh2010__/?hl=en ss">
            <Insta color="white" size={'3rem'} />
          </a>
          <a href="https://www.linkedin.com/in/harmandeep-singh-5b0b61209/">
            <Facebook color="white" size={'3rem'} />
          </a>
          <a href="https://github.com/Harman1997-96?tab=repositories">
            <Gitub color="white" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
