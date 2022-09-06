/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
export default function Stats() {
  return (
    <div className={styles.statback}>
        <div className={styles.statoverlay}></div>
        <div className={styles.stats}>
          <img src="/projects_completed.png" className={styles.statimg} alt="projects completed"/>
          <div className={styles.statcount}>
            <p className={styles.statval}>100</p> <p className={styles.stattitle}>Projects Completed</p>
          </div>
        </div>
        <div className={styles.stats}>
        <img src="/no_of_employees.png" className={styles.statimg} alt="projects completed"/>
        <div className={styles.statcount}>
            <p className={styles.statval}>1000</p> <p className={styles.stattitle}>Our Staff</p>
          </div>
        </div>
        <div className={styles.stats}>
        <img src="/services_provided.png" className={styles.statimg} alt="projects completed"/>
        <div className={styles.statcount}>
            <p className={styles.statval}>350</p> <p className={styles.stattitle}>Services Provided</p>
          </div>
        </div>
        <div className={styles.stats}>
        <img src="/happy_customers.png" className={styles.statimg} alt="projects completed"/>
        <div className={styles.statcount}>
            <p className={styles.statval}>2000</p> <p className={styles.stattitle}>Happy Customers</p>
          </div>
        </div>

    </div>
  )
}
