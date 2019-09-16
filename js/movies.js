const currentPage = 1;

const customToggle = id => {
    const elem = document.getElementById(id)
    elem.classList.toggle('hidden')
    
    if( id === 'modal'){
        const body = document.body
        body.classList.toggle('no_scroll')
    }
}

const populateCategories = (wraper, category, arr) => {
    console.log(arr);
    
    const container = document.getElementById(wraper)
    container.innerHTML = '';

    createSectionHeader(container, category)

    const movies_container = document.createElement('ul')
    movies_container.classList.add('movies_container');
    arr.map(m => movies_container.innerHTML += createMovieBox(m))

    container.appendChild(movies_container)
}


const createSectionHeader = (container, category) => {
    const header = document.createElement('header')
    header.classList.add('movies_header')
    header.innerHTML = `<p class="movies_header_title">${getSectionTitle(category)}</p>`

    container.appendChild(header)
}

const getSectionTitle = category => {
    let title = '';

    switch (category) {
        case 'popular':
            title = 'Popular Movies'
            break;

        case 'top_rated':
            title = 'Top Rated Movies'
            break;

        case 'upcoming':
            title = 'Upcoming Movies'
            break;

        case 'now_playing':
            title = 'Now Playing Movies'
            break;

        default:
            title = 'Search Results'
            break;
    }

    return title
}


const createMovieBox = (movie) => {
    const {id, poster_path, title} = movie;

    return `<li class="movie_box">
    <a href="#" onclick="toggleMovie(${id})">
    <figure><img src=https://image.tmdb.org/t/p/w500/${poster_path}></figure>
    <p>${title}</p>
    </a></li>`
}



const populateMovies = (page, arr) => {
    
    const container = document.getElementById('movies_list')
    
    if(page === 1){
        container.innerHTML = "";
        arr.map(m => container.innerHTML += createMovieBox(m))
    }else{
        arr.map(m => container.innerHTML += createMovieBox(m))
    }
}

const showAllMovies = (category, arr) => {
    const main_container = document.getElementById('movies_header')
    main_container.innerHTML = `<p class="movies_header_title">${getSectionTitle(category)}</p>`
    
    populateMovies(currentPage, arr)
}

const loadMore = (page, arr) => {
    page++
    populateMovies(page, arr)
}

const categoriesHandler = category => {
    event.preventDefault()
    document.getElementById('banner_wrapper').classList.add('hidden')
    document.getElementById('categories_wrapper').classList.add('hidden')
    document.getElementById('movies_wrapper').classList.remove('hidden')

    moviesFetch(category)
}