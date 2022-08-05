import React from 'react'
import { useSelector } from 'react-redux'
import {getAllMovies, getAllShows} from '../../features/movies/movieSlice'
import MovieCard from '../movieCard/MovieCard'
import './movieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  // console.log(movies);

  const renderMovies = movies.Response === 'True' ? (
    movies.Search.map((data, index)=>{
      return <MovieCard key={index} data={data} />
    })
  ):(
    <div className='movies_error'><h3>{movies.Error}</h3></div>
  );

  const renderShows = shows.Response === 'True' ? (
    shows.Search.map((data, index)=>{
      return <MovieCard key={index} data={data} />
    })
  ):(
    <div className='movies_error'><h3>{shows.Error}</h3></div>
  );
  return (
    <>
      <div className="movie_wrapper">
        <div className="movie_list">
          <h1>Movies</h1>
          <div className="movie_container">
            {renderMovies}
          </div>
        </div>
        <div className="show_list">
          <h1>Shows</h1>
          <div className="show_container">
          {renderShows}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListing