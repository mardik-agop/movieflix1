import React, {useState, useEffect} from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollToTopBtn = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 600){
        setBackToTopButton(true)
      }else{
        setBackToTopButton(false);
      }
    })
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {backToTopButton && (
        <button className='toTopBtn' onClick={scrollUp}><AiOutlineArrowUp/></button>
      )}
    </div>
  )
}

export default ScrollToTopBtn