import axios from 'axios'

const API = 'https://sheltered-dawn-94402.herokuapp.com/'
const MOVIES_ENDPOINT = API + 'movies'
const PROVIDERS_ENDPOINT = API + 'providers'

export function getProviders () {
  return axios
    .get(PROVIDERS_ENDPOINT)
    .then(res => (res))
}

export function getMovies () {
  return axios
    .get(MOVIES_ENDPOINT)
    .then(res => (res))
}

export function postMovie (data) {
  let payload = {
    data: {
      name: data.nameInput,
      year: data.yearInput,
      providers: data.providersInput
    }
  }

  return axios
    .post(MOVIES_ENDPOINT, payload)
    .then(res => (res))
}

export function getMovie (data) {
  let url = MOVIES_ENDPOINT + '/' + data.movieId

  return axios
    .get(url)
    .then(res => (res))
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

  return axios
    .put(url, payload)
    .then(res => (res))
}

export function deleteMovie (data) {
  let url = MOVIES_ENDPOINT + '/' + data.movieId
  return axios
    .delete(url)
    .then(res => (res))
}
