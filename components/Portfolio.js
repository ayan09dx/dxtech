/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Home.module.css'
export default function Portfolio() {
  return (
    <div className={styles.portfoliowrapper} id="portfolio">
        <h3>RECENT PORTFOLIO</h3>
        <h1>Our Exceptional Quality Work</h1>
        <div className={styles.porfoliobox}>
            <div className={styles.portfolio}>
                <img src="/portfolio.jpg" alt="portfolio" className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>Web Design</h4>
                    <h2>Creative design</h2>
                </div>
            </div>

            <div className={styles.portfolio}>
                <img src="/portfolio.jpg" alt="portfolio" className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>Web Design</h4>
                    <h2>Creative design</h2>
                </div>
            </div>

            <div className={styles.portfolio}>
                <img src="/portfolio.jpg" alt="portfolio" className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>Web Design</h4>
                    <h2>Creative design</h2>
                </div>
            </div>

            <div className={styles.portfolio}>
                <img src="/portfolio.jpg" alt="portfolio" className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>Web Design</h4>
                    <h2>Creative design</h2>
                </div>
            </div>

            <div className={styles.portfolio}>
                <img src="/portfolio.jpg" alt="portfolio" className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>Web Design</h4>
                    <h2>Creative design</h2>
                </div>
            </div>

            <div className={styles.portfolio}>
                <img src="/portfolio.jpg" alt="portfolio" className={styles.portfolioimg}/>
                <div className={styles.portfoliooverlaytop}></div>
                <div className={styles.portfoliooverlaybottom}></div>
                <div className={styles.portfolio_text}>
                    <h4>Web Design</h4>
                    <h2>Creative design</h2>
                </div>
            </div>
        
            
        </div>
    </div>
  )
}
