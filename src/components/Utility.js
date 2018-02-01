import axios from 'axios'

const API = 'https://sheltered-dawn-94402.herokuapp.com/movies'

export function queryMovie () {
    return axios
        .get(API)
        .then(response => {
            // return response.data.map(result => {
            //     const {name, year, providers} = result.movies
            //     return {
            //         providers,
            //         name,
            //         year
            //     }
            // })
            return response
        })
}

export function updateMovie (input) {
    let url = API + '/' + input.movieId
    let payload = {
        data: {
            name: input.nameInput,
            year: input.yearInput,
            providers: input.providersInput
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

export function createMovie (input) {
    let payload = {
        data: {
            name: input.nameInput,
            year: input.yearInput,
            providers: input.providersInput
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

export function deleteMovie (input) {
    let url = API + '/' + input.movieId
    console.log(url)
    return axios
        .delete(url)
        .then(response => {
            return response
        })
}
