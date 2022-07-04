import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const SingleTrending = ({id, overview, poster_path, title, vote_average}) => {
  return (
    <div className='single'>
      <Link to={`/single/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alat="avatar"/>
        <div className='single-info'>
          <h3 className='title'>{title ? title : "No Title"}</h3>
          <p className='vote'>{vote_average.toFixed(1)}</p>
          <button><FaPlay/></button>
        </div>
      </Link>
    </div>
  )
}

export default SingleTrending