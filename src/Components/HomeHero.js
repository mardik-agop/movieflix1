import React, {useState, useEffect} from 'react'
import homehero from '../assets/homehero.jpg'
import '../App.css';
import {BsCalendar2DateFill} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'

const HomeHero = () => {
  return (
    <div className='home-hero' style={{
      backgroundImage: `url(${homehero})`,
    }}>
      <div className='container hero-info'>
        <h3>MOVIEFLIX</h3>
        <h1>Unlimited <span>Movies</span>, TVs <br/> Showes, & More.</h1>
        <button className='pg'>PG18</button>
        <button className='hd'>HD</button>
        <span className='type'>Romance, Drama</span>
        <span className='data'><BsCalendar2DateFill style={{color: "#e4d804", marginRight: "5px"}}/> 2022</span>
        <span className='time'><BiTimeFive style={{color: "#e4d804", marginLeft: "10px"}}/> 120 min</span>
        <button className='trending-btn'>TRENDING MOVIES</button>
      </div>
    </div>
  )
}

export default HomeHero