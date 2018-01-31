import axios from 'axios'

export function queryMovie (query) {
    const url = 'https://sheltered-dawn-94402.herokuapp.com/movies'
    return axios
        .get(url)
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
