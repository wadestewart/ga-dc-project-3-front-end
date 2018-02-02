import React from 'react'

const Movie = ({ movieData }) => {
  let providers = movieData.providers.map((provider, index) => {
    return (
      <div className='provider' key={index}>
        <h3>{provider.name}</h3>
      </div>
    )
  })

  return (
    <div className='container-movie'>
      <h2><strong></strong>{movieData.name}</h2>
      <h2><strong></strong>{movieData.year}</h2>
      <div className='container-providers'>
        <h5>Providers</h5>
        {providers}
      </div>
    </div>
  )
}

export default Movie
