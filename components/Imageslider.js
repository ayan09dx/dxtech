import React from 'react'

export default function Imageslider() {
  return (
   <>
    <video className='homevideo' autoPlay muted loop>
       <source src='/homevid.mp4' type="video/mp4" />
    </video>
    <div className='video_container'>
    </div>
  </>
  )
}
