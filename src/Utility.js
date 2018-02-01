import axios from 'axios'

const API = 'https://sheltered-dawn-94402.herokuapp.com/'
const MOVIES_ENDPOINT = API + '/movies'
const PROVIDERS_ENDPOINT = API + '/providers'

export function getProviders () {
  return axios
    .get(PROVIDERS_ENDPOINT)
    .then(res => (res))
}

export function getMovies () {
  return axios
    .get(API)
    .then(res => {
      return res
    })
}

export function postMovie (data) {
  let payload = {
    data: {
      name: data.nameInput,
      year: data.yearInput,
      providers: data.providersInput
    }
  }
  console.log(API)
  console.log(payload)
  return axios
    .post(API, payload)
    .then(response => {
      return response
    })
}

export function updateMovie (data) {
  let url = MOVIES_ENDPOINT + '/' + data.movieId
  let payload = {
    data: {
      name: data.nameInput,
      year: data.yearInput,
      providers: data.providersInput
    }
  }
  console.log(url)
  console.log(payload)
  return axios
    .put(url, payload)
    .then(response => {
      return response
    })
}

export function deleteMovie (data) {
  let url = MOVIES_ENDPOINT + '/' + data.movieId
  console.log(url)
  return axios
    .delete(url)
    .then(response => {
      return response
    })
}
