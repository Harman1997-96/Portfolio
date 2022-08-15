import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'Nice Software Developer  in Jalandhar. It has been a wonderful real time experience; I got the best results for web development,design & testing. All I can say is worth of money.',
    },
    {
      img: profilePic2,
      review:
        'I am very much thankful to Harmandeep Singh to provide me the best and experience for Website in MERN.Advance Technology,Framework & Tools use really a great work with you ',
    },
    {
      img: profilePic3,
      review:
        'I love your service. Very easy to use. I would also like to say thank you to all working on time give your best . I am so pleased with your service.',
    },
    {
      img: profilePic4,
      review:
        'Wow what great service, I love it! Very easy to use. I am really satisfied with my  Application.',
    },
  ]

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonial
