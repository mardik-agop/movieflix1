import React from 'react'
import {TbMoodSad} from 'react-icons/tb'
import{Link} from 'react-router-dom'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'

const ErrorPage = () => {
  return (
    <div className='not-found'>
      <div className='container not-found-container'>
        <h1><TbMoodSad/></h1>
        <h2>404</h2>
        <h3>Page not found</h3>
        <p>The page tyou are looking for doesent exist or an other error ocurred.</p>
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
      <ScrollToTopBtn/>
    </div>
  )
}

export default ErrorPage