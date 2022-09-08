/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {FaFacebook,FaTwitterSquare,FaWhatsappSquare,FaInstagramSquare,FaArrowCircleUp} from 'react-icons/fa'
import Link from 'next/link';
import { useState,useEffect } from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
    const [scrollstate, setScrollstate] = useState('');
    const [burgerstate, setBurgerstate] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500){
      setVisible(true)
      }
      else if (scrolled <= 500){
      setVisible(false)
      }
      let about=(window.scrollY + document.querySelector('#about').getBoundingClientRect().top);
      let services=(window.scrollY + document.querySelector('#services').getBoundingClientRect().top);
      let portfolio=(window.scrollY + document.querySelector('#portfolio').getBoundingClientRect().top);
      let testimonial=(window.scrollY + document.querySelector('#testimonial').getBoundingClientRect().top);
      let contact=(window.scrollY + document.querySelector('#contact').getBoundingClientRect().top);
      if(scrolled<services){setScrollstate('services')}
      else if(scrolled>services && scrolled<about){setScrollstate('about')}
      else if(scrolled>about && scrolled<portfolio){setScrollstate('portfolio')}
      else if(scrolled>portfolio && scrolled<testimonial){setScrollstate('testimonial')}
      else{setScrollstate('contact')}
      
  };

  const scrollToTop = () =>{
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
  };

  const handleNav=(id)=>{
    setScrollstate(id);
    let y=(window.scrollY + document.querySelector('#'+id).getBoundingClientRect().top)-200;
    window.scrollTo(0, y);
  }

  useEffect(() => {
      window.addEventListener("resize", ()=>{window.innerWidth>=600?setBurgerstate(false):""});
      window.addEventListener('scroll', toggleVisible);
      
    },[]);

 let navlink=visible?styles.navlinkfixed:styles.navlink;
 let active=visible?styles.activefixed:styles.active;
 
  return (
    <>
    <div className={visible?styles.header_container_fixed:styles.header_container}>
      <header className={styles.header}>
         <div className={styles.headercontact} style={visible?{display:'none'}:{}}>
             <div className={styles.contactleft}>
             Phone no: +00 1234 567 or email us: emailsample@email.com
             </div>
             <div className={styles.contactright}>
                <a href="#" className={styles.soicalicons}><i><FaFacebook size={20}/></i></a>
                <a href="#" className={styles.soicalicons}><i><FaTwitterSquare size={20}/></i></a>
                <a href="#" className={styles.soicalicons}><i><FaWhatsappSquare size={20}/></i></a>
                <a href="#" className={styles.soicalicons}><i><FaInstagramSquare size={20}/></i></a>
             </div>
         </div>
         <nav className={styles.headermain}>
           <img src='/applogo.png' className={styles.applogo} alt='dxtechlogo'/>

           <ul className={!burgerstate?styles.navmenu:styles.navmenu +" " +styles.active}>
                <li className={styles.navitem}>
                   <a onClick={() => {handleNav('services');setBurgerstate(false);}} className={scrollstate==='services'?navlink + " " +active:navlink}>Services</a>
                </li>
                <li className={styles.navitem}>
                    <a onClick={() => {handleNav('about');setBurgerstate(false)}} className={scrollstate==='about'?navlink + " " +active:navlink}>About Us</a>
                </li>
                <li className={styles.navitem}>
                    <a onClick={() => {handleNav('portfolio');setBurgerstate(false)}} className={scrollstate=='portfolio'?navlink + " " +active:navlink}>Portfolio</a>
                </li>
                <li className={styles.navitem}>
                    <a onClick={() => {handleNav('testimonial');setBurgerstate(false)}} className={scrollstate=='testimonial'?navlink + " " +active:navlink}>Testimonial</a>
                </li>
                <li className={styles.navitem}>
                    <a onClick={() => {handleNav('contact');setBurgerstate(false)}} className={scrollstate=='contact'?navlink + " " +active:navlink}>Contact</a>
                </li>

            </ul>
            <button className={!burgerstate?styles.hamburger:styles.hamburger + " " +styles.active} onClick={() => setBurgerstate(!burgerstate)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </nav>
        <button className={styles.scrollbtn}>
        <FaArrowCircleUp onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}} />
        </button>
      </header>
    </div>
    </>
  )
}
