/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
import {FaFacebook,FaTwitterSquare,FaWhatsappSquare,FaInstagramSquare,FaArrowCircleUp} from 'react-icons/fa'
export default function Teams() {
  return (
   <div className={styles.teamwrapper}>
        <div className={styles.teamdesc}>
            <p style={{margin:0,fontSize:14}}>Team & Staff</p>
            <p style={{margin:0,fontSize:25,marginTop:10}}>Our Team</p>
            <p style={{margin:0,fontSize:16,margin:'20px 0px',fontWeight:300}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <a href="#" className='btn_primary'>View All Members</a>
            <br/>
        </div>
        <div className={styles.teammember}>
            <img src="/emp1.jpeg" className={styles.empimg} alt="emp_name"/>
            <div className={styles.empdesc}>
                <p>Suman Mandal</p>
                <span>CEO</span>
                <div className={styles.contactright}>
                <a href="#" className={styles.soicalicons}><i><FaFacebook size={25}/></i></a>
                <a href="#" className={styles.soicalicons}><i><FaTwitterSquare size={25}/></i></a>
                <a href="#" className={styles.soicalicons}><i><FaWhatsappSquare size={25}/></i></a>
                <a href="#" className={styles.soicalicons}><i><FaInstagramSquare size={25}/></i></a>
             </div>
            </div>
        </div>
        <div className={styles.teammember}>
            <img src="/emp1.jpeg" className={styles.empimg} alt="emp_name"/>
        </div>
        <div className={styles.teammember}>
            <img src="/emp1.jpeg" className={styles.empimg} alt="emp_name"/>
        </div>

   </div>
  )
}
