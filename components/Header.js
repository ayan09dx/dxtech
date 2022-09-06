/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {FaFacebook,FaTwitterSquare,FaWhatsappSquare,FaInstagramSquare,FaArrowCircleUp} from 'react-icons/fa'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
    const router = useRouter();
    const [burgerstate, setBurgerstate] = useState(true);
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
      setVisible(true)
      }
      else if (scrolled <= 300){
      setVisible(false)
      }
  };

  const scrollToTop = () =>{
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
  };

  useEffect(() => {
      window.addEventListener("resize", ()=>{window.innerWidth>=600?setBurgerstate(true):""});
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
           <Link href="/"><a><img src='/applogo.png' className={styles.applogo} alt='dxtechlogo'/></a></Link>

           <ul className={burgerstate?styles.navmenu:styles.navmenu +" " +styles.active}>
                <li className={styles.navitem}>
                   <Link href="/"><a onClick={() => setBurgerstate(!burgerstate)} className={router.pathname==='/'?navlink + " " +active:navlink}>Home</a></Link> 
                </li>
                <li className={styles.navitem}>
                    <Link href="/about"><a onClick={() => setBurgerstate(!burgerstate)} className={router.pathname==='/about'?navlink + " " +active:navlink}>About</a></Link> 
                </li>
                <li className={styles.navitem}>
                    <Link href="/services"><a onClick={() => setBurgerstate(!burgerstate)} className={router.pathname==='/services'?navlink + " " +active:navlink}>Services</a></Link> 
                </li>
                <li className={styles.navitem}>
                    <Link href="/portfolio"><a onClick={() => setBurgerstate(!burgerstate)} className={router.pathname=='/portfolio'?navlink + " " +active:navlink}>Portfolio</a></Link> 
                </li>
                <li className={styles.navitem}>
                    <Link href="/blog"><a onClick={() => setBurgerstate(!burgerstate)} className={router.pathname=='/blog'?navlink + " " +active:navlink}>Blog</a></Link> 
                </li>
                <li className={styles.navitem}>
                    <Link href="/contact"><a onClick={() => setBurgerstate(!burgerstate)} className={router.pathname=='/contact'?navlink + " " +active:navlink}>Contact</a></Link> 
                </li>

            </ul>
            <button className={burgerstate?styles.hamburger:styles.hamburger + " " +styles.active} onClick={() => setBurgerstate(!burgerstate)}>
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
