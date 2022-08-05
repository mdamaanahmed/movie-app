import React from 'react'
import './movieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = ({ data }) => {
  return (
    <>
      <div className="movie_card">
        <Link to={`/movie-detail/${data.imdbID}`}>
          <div className="card_inner">
            <div className="card_top">
              <img src={data.Poster} alt="" />
            </div>
            <div className="card_bottom">
              <div className="card_info">
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default MovieCard