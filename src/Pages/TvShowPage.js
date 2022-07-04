import React from 'react'
import TvShowes from '../Components/TvShowes'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'

const TvShowPage = () => {
  return (
    <div className='serials'>
      <TvShowes/>
      <ScrollToTopBtn/>
    </div>
  )
}

export default TvShowPage