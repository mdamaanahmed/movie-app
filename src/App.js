import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import MovieDetail from './components/movieDetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'
import './App.scss'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie-detail/:imdbID' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App