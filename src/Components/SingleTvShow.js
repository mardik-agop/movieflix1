import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const SingleTvShow = ({id, name, overview, poster_path, vote_average}) => {
  return (
    <div className='single'>
      <Link to={`/tvshow/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alat="avatar"/>
        <div className='single-info'>
          <h3 className='title'>{name ? name : "No Title"}</h3>
          <p className='vote'>{vote_average.toFixed(1)}</p>
          <button><FaPlay/></button>
        </div>
      </Link>
    </div>
  )
}

export default SingleTvShow