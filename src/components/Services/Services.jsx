import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'

const Services = () => {
  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  }

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <spane>
          The most popular services are Development , Architecture design,
          Testing.
          <br />
          {/* <strong style={{ color: 'black' }}>
            Development , Architecture design, Testing.
          </strong> */}
          Designs and Develops Custom Software applications, Frameworks, and
          Tools.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={
              'Logo,Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd'
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React, Nodejs, Express,MongoDB'}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={
              'UI design focuses on all the visual and interactive elements of a product interface, such as buttons, menu bars, icons, and more. '
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  )
}

export default Services
