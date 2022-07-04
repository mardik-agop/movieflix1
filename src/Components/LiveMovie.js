import React from 'react'
import live_img from '../assets/live_img.png'
import {BsPlayFill} from 'react-icons/bs'

const LiveMovie = () => {
  return (
    <div className='live-video'>
      <div className='container live-video-container'>
        <div className='left'>
          <div className='line-content'>
            <span className='line'></span>
            <h4>ONLINE STREAMING</h4>
          </div>
          <h1>Live Movie & TV Shows For <br/> Friends & Family</h1>
          <p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic  the 1960s with the release of Letraset sheets containing Lorem.</p>
          <h5>HD 4K</h5>
          <button><span><BsPlayFill/></span>WATCH NOW</button>
        </div>
        <div className='right'>
          <img src={live_img}/>
        </div>
      </div>
    </div>
  )
}

export default LiveMovie