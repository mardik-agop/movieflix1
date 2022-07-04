import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import detailsimg from '../assets/details.jpg';
import {BsCalendar2DateFill} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import poster from '../assets/poster.jpg'
import {useGlobalContext} from '../Context'
import {FaPlay} from 'react-icons/fa'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'

const SinglePage = () => {

  const {trending} = useGlobalContext();

  const {id} = useParams();
  const [video, setVideo] = useState();
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);

  // fetch video
  const fetchVideo = async () => {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US`);
      const data = await response.json();
      console.log(data.results[0].key);
      setVideo(data.results[0].key);
    }catch(err){
      console.log(err);
    }
  }

  // fetch details 
  const fetchDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US`);
    const data = await response.json();
    setDetails(data);
  }

  // get similar movies
  const fetchSimilar = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setSimilar(data.results);
  }

  useEffect(() => {
    fetchVideo();
    fetchDetails();
    fetchSimilar();
  }, []);

  return (
    <div>
      <div className='movie-details' style={{backgroundImage: `url(${detailsimg})`, height: "auto"}}>
      <div className="container movie-details-container">
        <div className="left">
          <img src={`https://image.tmdb.org/t/p/w1280${details.poster_path}`} alt="avatar"/>
        </div>
        <div className="right">
          <h2>{details.title ? details.title : "Action"}</h2>
          <button className='pg'>PG18</button>
          <button className='hd'>HD</button>
          <span className='type'>Romance, Drama</span>
          <span className='data'><BsCalendar2DateFill style={{color: "#e4d804", marginRight: "5px"}}/> 2022</span>
          <span className='time'><BiTimeFive style={{color: "#e4d804", marginLeft: "10px"}}/> 120 min</span>
          <p>{details.overview ? details.overview : "In the aftermath of a personal tragedy, Harper retreats alone to the beautiful English countryside, hoping to find a place to heal. But someone — or something — from the surrounding woods appears to be stalking her, and what begins as simmering dread becomes a fully-formed nightmare, inhabited by her darkest memories and fears."}</p>
          <div className="prime">
            <a href={`https://www.youtube.com/watch?v=${video}`} className="trailer">
              <button className="detail-btn">
                WATCH TRAILER
              </button>
            </a>
            <Link to="/" className="back-home">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className='also-like'>
      <div className='also-title'>
        <h3>You also May Like</h3>
        <div className='line'></div>
      </div>
      <div className='container also-like-container'>
        {similar.slice(0, 5).map((item) => {
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
    <ScrollToTopBtn/>
    </div>
  )
}

export default SinglePage