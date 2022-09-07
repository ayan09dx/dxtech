import React from 'react'
import {FaFacebook,FaTwitterSquare,FaWhatsappSquare,FaInstagramSquare,FaArrowCircleUp} from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className="footerwrapper">
        <div className='footersections'>
          <h1>DX Tech</h1>
          <p>
          Far far away, behind the word mountains, far from the countries.
          Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
        <div className='footersections'>
          <h2>Explore</h2>
          <a href="#">About Us</a>
          <a href="#">Portfolio</a>
          <a href="#">Testimonial</a>
          <a href="#">Our Team</a>
        </div>
        <div className='footersections'>
            <h2>Info</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Why Us</a>
        </div>
        <div className='footersections'>
            <h2>Contact Us</h2>
            <p>
              Address: Italgacha, West Bengal, Kolkata-700079
              <br/>
              Phone no: +00 1234 567
              <br/>
              email: emailsample@email.com
            </p>

            <div className="footersocial">
                <a href="#" className="footericons"><i><FaFacebook size={25}/></i></a>
                <a href="#" className="footericons"><i><FaTwitterSquare size={25}/></i></a>
                <a href="#" className="footericons"><i><FaWhatsappSquare size={25}/></i></a>
                <a href="#" className="footericons"><i><FaInstagramSquare size={25}/></i></a>
             </div>
        </div>
        <div className='footerbtmtext'>
        Copyright ©2022 All rights reserved
        </div>
    </footer>
  )
}
