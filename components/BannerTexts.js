import React from 'react'
import styles from '../styles/Home.module.css'

export default function BannerTexts() {
  return (
    <div className={styles.banner_text}>
          <p className={styles.welcome_text}>
            Welcome to DX Tech
          </p>
          <p className={styles.main_text}>
            We Create Website The Way You Want
          </p>
          <p className={styles.banner_subtext}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className={styles.bannerbtnwrap}>
            <a href="#" className='btn_primary'>Learn More</a>
            <a href="#" className='btn_secondary'>View Portfolio</a>
          </div>     
        </div>
  )
}
