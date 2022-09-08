/* eslint-disable @next/next/no-img-element */
import {useEffect} from 'react'
import styles from '../styles/Home.module.css'
import {AiFillStar} from 'react-icons/ai'
import { testimonial } from './Data'

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
            {testimonial.map((data,key)=>(
                <div className={styles.testimonial} key={key}>
                <div style={{display:'flex'}}>
                    {data.stars.map((star,skey)=>(
                      <AiFillStar color='green' size={25} key={skey}/>
                    ))}
                </div>
                <p>
                {data.comment}
                </p>
                <div className={styles.cutomerwrap}>
                    <img src={data.img} className={styles.customer} alt="customer"/>
                    <div>
                        <h3>{data.name}</h3>
                        <h4>{data.desig}</h4>
                    </div>
                    
                </div>

            </div>

            ))
            
           }
        </div>
    </div>
  )
}
