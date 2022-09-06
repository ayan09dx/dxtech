/* eslint-disable @next/next/no-img-element */
import {useEffect} from 'react'
import styles from '../styles/Home.module.css'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {

    useEffect(()=>{
        const slider = document.querySelector('#testimonial');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor="pointer"
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor="default"
        });
        slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor="default"
        });
        slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        });
},[])


  return (
    <div className={styles.testimonialwrapper}>
        <div className={styles.testimonialleft}>
            <div className={styles.testimonialleftoverlay}></div>
            <h4>TESTIMONIAL</h4>
            <h1>What Our Clients Says</h1>
        </div>
        <div className={styles.testimonialright} id="testimonial">
            <div className={styles.testimonial}>
                <div style={{display:'flex'}}>
                    <AiFillStar color='green' size={25}/>
                    <AiFillStar color='green' size={25}/>
                    <AiFillStar color='green' size={25}/>
                    <AiFillStar color='green' size={25}/>
                    <AiFillStar color='green' size={25}/>
                </div>
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                </p>
                <div className={styles.cutomerwrap}>
                    <img src="/emp1.jpeg" className={styles.customer} alt="customer"/>
                    <div>
                        <h3>Roger Binny</h3>
                        <h4>Marketing Head</h4>
                    </div>
                    
                </div>

            </div>
            <div className={styles.testimonial}>
                
            </div>
            <div className={styles.testimonial}>
                
            </div>
            <div className={styles.testimonial}>
                
            </div>
            <div className={styles.testimonial}>
                
            </div>
            <div className={styles.testimonial}>
                
            </div>
            <div className={styles.testimonial}>
                
            </div>
            <div className={styles.testimonial}>
                
            </div>
        </div>
    </div>
  )
}
