import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";


const MoveToTop = () => {
    const[isVisible,setIsVisible] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 300){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll',handleScroll)

        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])

    const scrollToTop = ()=>{
       window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
    <div className={`fixed bottom-3 right-2 ${isVisible ? 'opacity-100' : 'opacity-0'} cursor-pointer`}>
       <FaArrowCircleUp className='text-3xl sm:text-2xl text-blue-500' onClick={scrollToTop} />
    </div>
  )
}

export default MoveToTop