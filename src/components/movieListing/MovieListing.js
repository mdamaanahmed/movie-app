import React from 'react'
import { useSelector } from 'react-redux'
import {getAllMovies} from '../../features/movies/movieSlice'
import MovieCard from '../movieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  console.log(movies);

  const renderMovies = movies.Response === 'True' ? (
    movies.Search.map((data, index)=>{
      return <MovieCard key={index} data={data} />
    })
  ):(
    <div className='movies_error'><h3>{movies.Error}</h3></div>
  );
  return (
    <>
      <div className="movie_wrapper">
        <div className="movie_list">
          <h2>Movies</h2>
          <div className="movie_container">
            {renderMovies}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListing