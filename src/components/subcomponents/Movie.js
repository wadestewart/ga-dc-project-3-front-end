import React from 'react'

const Movie = ({ movieData }) => {
  let providers = movieData.providers.map(provider => {
    return (
      <div className='provider'>
        <p>{provider.name}</p>
      </div>
    )
  })

  return (
    <div className='container-movie'>
      <p><strong>Name: </strong>{movieData.name}</p>
      <p><strong>Year: </strong>{movieData.year}</p>
      <div className='container-providers'>
        <h2>Providers</h2>
        {providers}
      </div>
    </div>
  )
}

export default Movie
