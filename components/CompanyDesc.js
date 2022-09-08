/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
import { companydesc } from './Data'

export default function CompanyDesc() {
  const handleNav=(id)=>{
    let y=(window.scrollY + document.querySelector('#'+id).getBoundingClientRect().top)-200;
    window.scrollTo(0, y);
  }

  return (
    <div className={styles.companydescwrapper} id="about">
        <div className={styles.companyimg}>
            <div className={styles.companystat}>
             <img src="/exp.png" alt="exp-img" className={styles.expimg}/>
             <h1>{companydesc.totalExp}</h1>
             <p>Years of Experience</p>
            </div>
            <img src="/comimg1.jpg" alt="company_img" className={styles.comimg1}/>
            <img src="/comimg2.jpg" alt="company_img" className={styles.comimg2}/>
        </div>
        <div className={styles.companydesc}>
            <h3>{companydesc.welcome}</h3>
            <h1>{companydesc.herotext}</h1>
            <p>
            {companydesc.herosubtext}
            </p>
            <button  onClick={()=>handleNav('contact')} className='btn_primary' style={{color:'white',width:200,textAlign:'center',marginTop:30}}>Get in Touch</button>
        </div>
    </div>
  )
}
