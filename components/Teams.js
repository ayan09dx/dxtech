/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
import { team } from './Data'
import {FaFacebook,FaTwitterSquare,FaWhatsappSquare,FaInstagramSquare,FaArrowCircleUp} from 'react-icons/fa'

export default function Teams() {
  return (
   <div className={styles.teamwrapper}>
        <div className={styles.teamdesc}>
            <p style={{margin:0,fontSize:14}}>Team & Staff</p>
            <p style={{margin:0,fontSize:25,marginTop:10}}>Our Team</p>
            <p style={{margin:0,fontSize:16,margin:'20px 0px',fontWeight:300}}>{team.teamdesc}</p>
            <a href="#" className='btn_primary'>View All Members</a>
            <br/>
        </div>
        {team.teammembers.map((data,key)=>(
            <div className={styles.teammember} key={key}>
            <img src={data.img} className={styles.empimg} alt="emp_name"/>
            <div className={styles.empdesc}>
                <p>{data.name}</p>
                <span>{data.designation}</span>
                <div className={styles.contactright}>
                <a href={data.facebook} className={styles.soicalicons}><i><FaFacebook size={25}/></i></a>
                <a href={data.twitter} className={styles.soicalicons}><i><FaTwitterSquare size={25}/></i></a>
                <a href={data.whatsapp} className={styles.soicalicons}><i><FaWhatsappSquare size={25}/></i></a>
                <a href={data.instagram} className={styles.soicalicons}><i><FaInstagramSquare size={25}/></i></a>
             </div>
            </div>
        </div>

        ))}
        
       

   </div>
  )
}
