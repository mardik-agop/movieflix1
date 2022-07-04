import React from 'react'
import {useGlobalContext} from '../Context'
import {FaPlay} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const TopRatedMovies = () => {

  const {topRatedMovies} = useGlobalContext();

  return (
    <div className='top-rated '>
      <div className='container'>
      <div className='info'>
        <h1>Top Rated Movies</h1>
        <p>WATCH BEST  MOVIES</p>
        <div className='line'></div>
      </div>
      <div className='top-rated-movies'>
        {topRatedMovies.slice(0, 7).map((item) => {
          return(
            <div className='single' key={item.id}>
            <Link to={`/single/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} alat="avatar"/>
              <div className='single-info'>
                <h3 className='title'>{item.title ? item.title : "No Title"}</h3>
                <p className='vote'>{item.vote_average.toFixed(1)}</p>
                <button><FaPlay/></button>
              </div>
            </Link>
          </div>
          )
        })}
    </div>
      </div>
    </div>
  )
}

export default TopRatedMovies