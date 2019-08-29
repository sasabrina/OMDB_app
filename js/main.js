const api_key = 'e3087953b023a4a056fc42d81ebd595d';

const categoryFetch = (container, category) => {
    return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => {
        let arr = response.results.slice(0, 5);
        printMovies(container, arr);
    })
}

const initialize = () => {
    categoryFetch('popular_wraper', 'popular')
    categoryFetch('toprated_wraper', 'top_rated')
    categoryFetch('upcoming_wraper', 'upcoming')
    categoryFetch('nowplaying_wraper', 'now_playing')
}

const printMovies = (wraper, arr) => {
    console.log(arr);
    
    const category_container = document.getElementById(wraper)
    category_container.innerHTML = '';

    ccreateCategoryHeader(category_container, wraper)

    const movies_container = document.createElement('ul')
    movies_container.classList.add('movies_container');

    arr.map(m => createMovieBox(movies_container, m))

    category_container.appendChild(movies_container)
}


const createCategoryHeader = (container, category) => {
    const header = document.createElement('header')
    header.classList.add('movies_header')

    const header_title = document.createElement('p')
    header_title.classList.add('movies_header_title')
    header_title.innerText = getCategoryTitle(category)

    header.appendChild(header_title)
    container.appendChild(header)
}

const getCategoryTitle = category => {
    let title = '';

    switch (category) {
        case 'popular_wraper':
            title = 'Popular Movies'
            break;

        case 'toprated_wraper':
            title = 'Top Rated Movies'
            break;

        case 'upcoming_wraper':
            title = 'Upcoming Movies'
            break;

        default:
            title = 'Now Playing Movies'
            break;
    }

    return title
}


const createMovieBox = (container, movie) => {
    const {id, poster_path, title} = movie;

    const li = document.createElement('li')
    li.classList.add('movie_box')

    const a = document.createElement('a')
    a.href = '#'
    a.onclick = () => modalFnc;

    const img = document.createElement('img')
    img.src = `https://image.tmdb.org/t/p/w500/${poster_path}`

    const figure = document.createElement('figure')
    figure.appendChild(img)
    a.appendChild(figure)

    const movie_title = document.createElement('p')
    movie_title.innerText = title
    a.appendChild(movie_title)

    li.appendChild(a)
    container.appendChild(li)
}