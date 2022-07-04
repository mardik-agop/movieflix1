import React, {useState, useEffect} from 'react'
import {FaPlay} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../Context'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'


const Search = () => {

  const {searchedMovies, handleClick, handleSubmit} = useGlobalContext();

  console.log(searchedMovies);

  return (
    <div className='searched'>
      <div className='container'>
        <h1>Search your faverailte <br/> movies</h1>
        <p>Enjoy watching movies</p>
        <div className='line'></div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleClick} placeholder="Enter a movie name..."/>
        </form>
      </div>
      <div className='container searched-container'>
      {searchedMovies.length > 0 ? searchedMovies.map((item) => {
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
        }) : <h2 className='no-movies' style={{color: "#fff"}}>No novies matches your term. </h2>}
      </div>
      <ScrollToTopBtn/>
    </div>
  )
}

export default Search