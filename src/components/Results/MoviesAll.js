import React from 'react'
import Movie from '../subcomponents/Movie'

const MovieAll = ({ moviesData }) => {
  let movies = moviesData.map((movie, index) => {
    return (
      <Movie movieData={movie} key={index} />
    )
  })
  return (
    <div className='container-result center'>
      {movies}
    </div>
  )
}

export default MovieAll
