import React from 'react'
import styles from '../styles/Home.module.css'
import { bannertext } from './Data'

export default function BannerTexts() {

  const handleNav=(id)=>{
    let y=(window.scrollY + document.querySelector('#'+id).getBoundingClientRect().top)-200;
    window.scrollTo(0, y);
  }

  return (
    <div className={styles.banner_text}>
          <p className={styles.welcome_text}>
            {bannertext.welcome}
          </p>
          <p className={styles.main_text}>
            {bannertext.herotext}
          </p>
          <p className={styles.banner_subtext}>
            {bannertext.herosubtext}
          </p>

          <div className={styles.bannerbtnwrap}>
            <button onClick={()=>handleNav('about')}  className='btn_primary'>Learn More</button>
            <button  onClick={()=>handleNav('portfolio')}  className='btn_secondary'>View Portfolio</button>
          </div>     
        </div>
  )
}
