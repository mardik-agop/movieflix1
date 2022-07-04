import React, {useState, useEffect} from 'react'
import SingleTrending from './SingleTrending'
import {useGlobalContext} from '../Context'

const Trending = () => {

  const {trending} = useGlobalContext();

  return (
    <div>
      <div className='container trending-start'>
        <h3>Trending Movies To Watch Now</h3>
        <p>Most watched movies by days</p>
        <div className='line'></div>
      </div>
      <div className='trending-movies container'>
        {trending.map((item) => {
          return <SingleTrending key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default Trending