/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
import { portfolio } from './Data'

export default function Portfolio() {
  return (
    <div className={styles.portfoliowrapper} id="portfolio">
        <h3>RECENT PORTFOLIO</h3>
        <h1>Our Exceptional Quality Work</h1>
        <div className={styles.porfoliobox}>
            {portfolio.map((data,key)=>(
                <div className={styles.portfolio} key={key}>
                <img src={data.img} alt={data.title} className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>{data.type}</h4>
                    <h2>{data.title}</h2>
                </div>
            </div>


            ))}            
        </div>
    </div>
  )
}
