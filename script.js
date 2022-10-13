let API_KEY = 'api_key=24e07e23d8e8a006e8f4075b9fc9a27e';
let BASE_URL = 'https://api.themoviedb.org/3';
let API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&page=1&'+API_KEY;
let IMG_URL = 'https://image.tmdb.org/t/p/w500';
let searchURL = BASE_URL+'/search/movie?'+API_KEY;

let form =  document.getElementById('form');
let search = document.getElementById('search');
let main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {

    fetch(url)
    .then(result => result.json())
    .then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        let {title, poster_path, vote_average, release_date} = movie;
        let movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
        `<img src="${IMG_URL+poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="movie-date">
            <h5>${release_date}</h5>
            </div>
        `

        main.appendChild(movieEl);
    })
}

    function getColor(vote) {
    if(vote>= 8){
        return 'black'
    }else if(vote >= 5){
        return 'black'
    }else{
        return 'black'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})