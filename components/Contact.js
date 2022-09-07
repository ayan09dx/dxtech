import React from 'react'
import styles from '../styles/Home.module.css'
export default function Contact() {
  return (
    <form>
    <div className={styles.contactwrapper} id="contact">
        <h2>Get In Touch</h2>
        <div className={styles.contactwrapperoverlay}></div>
        <div className="input-outlined">
            <input type="email" placeholder='Enter Email ID'/>
            <label>Email ID</label>
         </div>   

         <div className="input-outlined">
            <input type="text" placeholder='Enter Mobile Number'/>
            <label>Mobile Number</label>
         </div> 

         <button className='btn_primary'>Submit</button>
         
    </div>
    </form>
  )
}
