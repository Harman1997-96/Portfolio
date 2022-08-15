import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { themeContext } from '../../Context'
const Contact = () => {
  const notify = () => toast('Thanks for Contacting me')
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const form = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_nko0xli',
        'template_xqfnpnk',
        form.current,
        '9Ro7ShCXlaULMFuwb',
        setDone(''),
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
          form.reset()
          setDone('')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>
            Contact me <br /> Any Time.
          </span>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="to_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="from_name"
            className="user"
            placeholder="Email"
          />
          <input
            type="number"
            name="from_name"
            className="user"
            placeholder="Phone Number"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input
            type="submit"
            value="Send"
            className="button"
            onClick={notify}
          />
          {/* <span>{done && 'Thanks for Contacting me'}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
