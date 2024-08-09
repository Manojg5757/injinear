import React, { useEffect, useState } from 'react'
import shopvideo from '../assets/shopvideo.mp4'
import websitevideo from '../assets/websitevideo.mp4'

const BigScreenSlider = () => {
  const[currentSlide,setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videos = [
    {
      id:1,
      vSource:shopvideo
    },
    {
      id:2,
      vSource:websitevideo
    }
  ]

  useEffect(()=>{
     const nextSlide = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev)=> prev === videos.length -1 ? 0 : prev+1)
      setIsTransitioning(false)
      }, 500);
     }, 5000);

     return ()=>clearInterval(nextSlide)
  },[videos.length])
  return (
    <div className='w-full h-full hidden sm:flex mt-4' >
        <video className={`w-full h-auto ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-700 ease-in-out`} src={videos[currentSlide].vSource} autoPlay muted></video>
    </div>
  )
}

export default BigScreenSlider