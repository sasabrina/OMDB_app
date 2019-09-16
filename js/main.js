
const categoryFetch = (container, category) => {
    return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => {
        let arr = response.results.slice(0, 5);
        populateCategories(container, category, arr);
    })
}

const searchFetch = search => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}&page=${currentPage}`)
    .then(response => response.json())
    .then(response => console.log(response.results))
}

const movieFetch = movieId => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => fillModal(response))
}

const moviesFetch = (category) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}&page=${currentPage}`)
    .then(response => response.json())
    .then(response => showAllMovies(category, response.results))
}

const initialize = () => {
    categoryFetch('popular_wraper', 'popular')
    categoryFetch('toprated_wraper', 'top_rated')
    categoryFetch('upcoming_wraper', 'upcoming')
    categoryFetch('nowplaying_wraper', 'now_playing')
}
