/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'

export default function CompanyDesc() {
  return (
    <div className={styles.companydescwrapper}>
        <div className={styles.companyimg}>
            <div className={styles.companystat}>
             <img src="/exp.png" alt="exp-img" className={styles.expimg}/>
             <h1>42</h1>
             <p>Years of Experience</p>
            </div>
            <img src="/comimg1.jpg" alt="company_img" className={styles.comimg1}/>
            <img src="/comimg2.jpg" alt="company_img" className={styles.comimg2}/>
        </div>
        <div className={styles.companydesc}>
            <h3>Welcome to DX Teach</h3>
            <h1>We Are Portech Creative Studio Agency</h1>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <a href="#" className='btn_primary' style={{color:'white',width:200,textAlign:'center',marginTop:30}}>Get in Touch</a>
        </div>
    </div>
  )
}
