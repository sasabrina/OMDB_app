const api_key = 'e3087953b023a4a056fc42d81ebd595d';

const movieFetch = movieId => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => fillModal(response))
}

const toggleModal = id => {
    const mdl = document.getElementById('modal')
    mdl.classList.toggle('hidden')
    movieFetch(id)

    const body = document.body
    body.classList.toggle('no_scroll')
}

const fillModal = movie => {
    const {backdrop_path, poster_path, title, tagline, overview, genres, release_date} = movie;

    getImages(backdrop_path, poster_path)
    createTitles(title, tagline)
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

    const h1 = document.createElement('h1')
    h1.innerText = `${title}`

    const p = document.createElement('p')
    p.innerText = `${tagline}`

    titles.appendChild(h1)
    titles.appendChild(p)
}