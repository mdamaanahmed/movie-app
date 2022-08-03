import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing'
import MovieApi from '../../common/apis/movieApi'
import MovieApiKey from '../../common/apis/MovieApiKey'
import {useDispatch} from 'react-redux'
import {addMovies} from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const searchKeyword = 'harry'

    const fetchMovies = async () => {
      const res = await MovieApi.get(`?apikey=${MovieApiKey}&s=${searchKeyword}`)
      .catch((err) => {
        console.log(err);
      })
      // console.log(res);
      dispatch(addMovies(res.data))
    }
    
    fetchMovies();
  }, [])

  return (
    <>
      <div className="banner_img">

      </div>
      <MovieListing />
    </>
  )
}

export default Home