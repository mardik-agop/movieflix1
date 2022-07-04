import React, {useState, useEffect, useContext} from 'react'

const AppContext = React.createContext();
const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_ACCESS_KEY}`
const serialsURL = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=1`;
const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=1`;
const topRatedTvURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=1`;
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_ACCESS_KEY}&query=`;

const AppProvider = ({children}) => {

  // useState
  const [trending, setTrending] = useState([]);
  const [tvShowes, setTvShowes] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  // handleShow function
  const handleShow = () => {
    setShow(!show);
  }

    // fetch trending function
  const fetchTrending = async () => {
    const response = await fetch(trendingURL);
    const data = await response.json();
    setTrending(data.results);
    const newTrending = data.results.map((item) => {
      const {id, overview, poster_path, title, vote_average} = item;
      return {id, overview, poster_path, title, vote_average}
    });
    setTrending(newTrending);
  }

  // fetch serials ffunction
  const fetchSerials = async () => {
    const response = await fetch(serialsURL);
    const data = await response.json();
    setTvShowes(data.results);
  }

  // fetch top rated movies
  const fetchTopRatedNovies = async () => {
    const response = await fetch(topRatedURL);
    const data = await response.json();
    setTopRatedMovies(data.results);
  }

  // fetch top rated Tv showes
  const fetchTopRatedTv = async () => {
    const response = await fetch(topRatedTvURL);
    const data = await response.json();
    setTopRatedTv(data.results);
  }

  // fetch search 
  const searchMovie = async () => {
    const response = await fetch(`${searchURL}${term}`);
    const data = await response.json();
    setSearchedMovies(data.results);
  }

  // handle click function
  const handleClick = (e) => {
    setTerm(e.target.value);
  }

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if(term){
      searchMovie();
    }else{
      setSearchedMovies([]);
    }
  }

  // useEffect
  useEffect(() => {
    fetchTrending();
    fetchSerials();
    fetchTopRatedNovies();
    fetchTopRatedTv();
  }, []);

  return(
    <AppContext.Provider value={{
      show,
      setShow,
      handleShow,
      trending,
      tvShowes,
      topRatedMovies,
      topRatedTv,
      term,
      setTerm,
      searchedMovies,
      handleClick,
      handleSubmit
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}