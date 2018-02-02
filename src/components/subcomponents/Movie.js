import React from 'react'

const Movie = ({ movieData }) => {
  let providers = movieData.providers.map((provider, index) => {
    return (
      <div className='provider' key={index}>
        <p>{provider.name}</p>
      </div>
    )
  })

  return (
    <div className='container-movie'>
      <h3 className='center'><strong>{movieData.name}</strong></h3>
      <h3 className='center'><strong>{movieData.year}</strong></h3>
      <div className='container-providers center '>
        <p className="center">Providers</p>
        <h5>{providers}</h5>
        <hr />
      </div>
    </div>
  )
}

export default Movie
