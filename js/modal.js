const api_key = 'e3087953b023a4a056fc42d81ebd595d';

const movieFetch = movieId => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => fillModal(response))
}

const toggleMovie = id => {
    toggleModal()
    movieFetch(id)
}

const toggleModal = () => {
    const mdl = document.getElementById('modal')
    mdl.classList.toggle('hidden')
    
    const body = document.body
    body.classList.toggle('no_scroll')
}

const fillModal = movie => {
    const {backdrop_path, poster_path, title, tagline, overview, genres, release_date} = movie;

    getImages(backdrop_path, poster_path)
    createTitles(title, tagline)
    getData(overview, genres, release_date)
}

const getImages = (backdrop, poster) => {
    
    const header = document.getElementById('modal_header_wraper')
    header.style.backgroundImage =  `url('https://image.tmdb.org/t/p/w500/${backdrop}')`
    
    const figure = document.getElementById('modal_img')
    figure.innerHTML = `<img src = "https://image.tmdb.org/t/p/w500/${poster}">`
}

const createTitles = (title, tagline) => {
    const titles = document.getElementById('modal_titles')
    titles.innerHTML = "";

    titles.innerHTML = `<h1>${title}</h1>
    <p>${tagline}</p>`
}

const getData = (overview, genres, date) => {
    const container = document.getElementById('modal_data')
    container.innerHTML = "";

    let genersToPrint = genres.map(({name}) => name).join(', ')
    container.innerHTML = `<p>${overview}</p>
    <h2>Genres</h2>
    <p>${genersToPrint}</p>
    <h2>Release Date</h2>
    <p>${date}</p>`
}