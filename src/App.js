import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
// import pages
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import MoviesPage from './Pages/MoviesPage';
import TvShowPage from './Pages/TvShowPage';
import SinglePage from './Pages/SinglePage';
import Search from './Pages/Search';
import ErrorPage from './Pages/ErrorPage';
import SingleTvShowPage from './Pages/SingleTvShowPage'
import Contact from './Pages/Contact'

// import components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/tvshow' element={<TvShowPage/>}/>
        <Route path='/single/:id' element={<SinglePage/>}/>
        <Route path='/tvshow/:id' element={<SingleTvShowPage/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
