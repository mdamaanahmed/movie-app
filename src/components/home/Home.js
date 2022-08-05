import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing'
import {useDispatch} from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])

  return (
    <>
      <div className="banner_img">

      </div>
      <MovieListing />
    </>
  )
}

export default Home