import React, { useEffect,useState } from 'react'
import Row from './Row'
import "./Home.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

const apiKey=process.env.REACT_APP_API_KEY;
const url="https://api.themoviedb.org/3/";
const imgUrl="https://image.tmdb.org/t/p/original";
const upcoming="upcoming";
const popular="popular";
const nowPlaying="now_playing";
const topRated="top_rated";






const Home = () => {

  const[upcomingMovies, setUpcomingMovies]=useState([]);
  const[popularMovies, setPopularMovies]=useState([]);
  const[nowPlayingMovies, setNowPlayingMovies]=useState([]);
  const[topRatedMovies, setTopRatedMovies]=useState([]);
  const[genre, setGenre]=useState([]);

  useEffect(()=>{
    const fetchUpcoming=async()=>{
      const {data:{results}} =await axios.get(`${url}movie/${popular}?api_key=${apiKey}&language=en-US&page=1`);

      setUpcomingMovies(results);
    };
    

    
    const fetchPopular=async()=>{
      const {data:{results}} =await axios.get(`${url}movie/${nowPlaying}?api_key=${apiKey}&language=en-US&page=1`);

      setPopularMovies(results);
    };
    

    const fetchNowPlaying=async()=>{
      const {data:{results}} =await axios.get(`${url}movie/${topRated}?api_key=${apiKey}&language=en-US&page=1`);

      setNowPlayingMovies(results);
    };
    

    const fetchTopRated=async()=>{
      const {data:{results}} =await axios.get(`${url}movie/${upcoming}?api_key=${apiKey}&language=en-US&page=1`);

      setTopRatedMovies(results);
    };

    
    const getAllGenre=async()=>{
      // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

      const {data:{genres}} =await axios.get(`${url}genre/movie/list?api_key=${apiKey}&language=en-US`);

      setGenre(genres);
    };

    fetchUpcoming();
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    getAllGenre();

  },[])

  return (
    <section className='home'>
    <div className='banner'  style={{
      backgroundImage:popularMovies[0]? `url(${`${imgUrl}${popularMovies[0].poster_path}`})`:"$bg:rgb(16,16,16)"
    }} >

    { popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
    {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
    
      <div>
        <button><BiPlay/> Play  </button>
        <button>My List <AiOutlinePlus/> </button>
      </div>      

    </div>

    <Row title={"Upcoming"} arr={upcomingMovies}/>
    <Row title={"Popular"} arr={popularMovies} />
    <Row title={"Now playing"} arr={nowPlayingMovies} />
    <Row title={"Top rated"} arr={topRatedMovies} />

    <div className="genreBox">
      {
        
        genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          ))
          
      }
    </div>

    </section>
  )
}

export default Home