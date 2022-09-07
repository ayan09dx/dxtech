/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
import { bannercards } from './Data'
export default function BannerCards() {
  return (
    <div className={styles.bannercardwrapper} id="services">
        {bannercards.map((data,key)=>(
            <div className={styles.bannercard} key={key}>
            <img src={data.icon} alt={data.title} className={styles.bannercardlogo}/>
            <h3>{data.title}</h3>
            <p style={{lineHeight:'1.5em',margin:0}}>
            {data.des}
            </p>
        </div>
        ))}
        
    </div>
  )
}
