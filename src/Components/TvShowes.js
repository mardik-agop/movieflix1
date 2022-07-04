import React from 'react'
import SingleTvShow from './SingleTvShow'
import {useGlobalContext} from '../Context'
import homehero from '../assets/homehero.jpg'

const TvShowes = () => {

  const {tvShowes} = useGlobalContext();

  return (
    <div className='tvshows'>
      <div className='container'>
        <h1>Best TV Shows To Watch <br/> In This <span>Season</span></h1>
        <p>Choose Your Best TV Show</p>
        <div className='line'></div>
      </div>
      <div className='container tvshow-container'>
        {tvShowes.map((item) => {
          return <SingleTvShow key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default TvShowes