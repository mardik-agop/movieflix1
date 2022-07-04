import React, {useState, useEffect} from 'react'
import BestPicks from '../Components/BestPicks'
import FreeTrail from '../Components/FreeTrail'
import HomeHero from '../Components/HomeHero'
import LiveMovie from '../Components/LiveMovie'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'
import TopRatedMovies from '../Components/TopRatedMovies'
import TopRatedTv from '../Components/TopRatedTv'
import Trending from '../Components/Trending'

const HomePage = () => {
  return (
    <div>
      <HomeHero/>
      <Trending/>
      <BestPicks/>
      <TopRatedMovies/>
      <LiveMovie/>
      <TopRatedTv/>
      <FreeTrail/>
      <ScrollToTopBtn/>
    </div>
  )
}

export default HomePage