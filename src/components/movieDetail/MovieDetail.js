import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAsyncWithID, getSingleData, removeSelectedIdData } from '../../features/movies/movieSlice'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import './movieDetail.scss'

const MovieDetail = () => {
  let { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSingleData)

  useEffect(() => {
    dispatch(fetchAsyncWithID(imdbID))

    return () => {
      dispatch(removeSelectedIdData())
    }
  }, [dispatch, imdbID])

  return (
    <>
      <div className="movie_section">
        <div className="section_left">
          <div className="movie_title">
            <h1>{data.Title}</h1>
          </div>
          <div className="movie_rating">
            <span>IMDB Rating : </span>{data.imdbRating}
            <span>IMDB Votes : </span>{data.imdbVotes}
            <span>Runtime : </span>{data.Runtime}
            <span>Year : </span>{data.Year}
            <span>IMDB Rating : </span>{data.imdbRating}
          </div>
          <div className="movie_plot">
            {data.plot}
          </div>
          <div className="movie_info">
            <div>
              <span>Director</span> : {data.Director}
            </div>
            <div>
              <span>Stars</span> : {data.Actors}
            </div>
            <div>
              <span>Generes</span> : {data.Genre}
            </div>
            <div>
              <span>Language</span> : {data.Language}
            </div>
            <div>
              <span>Awards</span> : {data.Awards}
            </div>
          </div>
        </div>
        <div className="section_right">
          <img src={data.Poster} alt="" />
        </div>
      </div>
    </>
  )
}

export default MovieDetail