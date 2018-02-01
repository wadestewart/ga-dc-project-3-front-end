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

export function updateMovie (query) {
    let url = API + '/' + query.movieId
    let payload = {
        data: {
            name: query.nameInput,
            year: query.yearInput,
            providers: query.providersInput
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
