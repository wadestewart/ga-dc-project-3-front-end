import React from 'react'
import Movie from '../subcomponents/Movie'
import UpdateMovie from '../Forms/UpdateMovie'
import DeleteMovie from '../Forms/DeleteMovie'

const MovieSingle = ({ movieData }) => {
  return (
    <div className='container-result'>
      <Movie movieData={movieData} />
      <div className='container-forms'>
        <UpdateMovie movieData={movieData} />
        <DeleteMovie movieData={movieData} />
      </div>
    </div>
  )
}

export default MovieSingle
