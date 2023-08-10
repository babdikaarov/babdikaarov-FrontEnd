const tmdbKey = "16f5ad81db28c40fb4c43f24cd99aa43";
const tmdbBaseUrl = "https://api.themoviedb.org/3/";
const playBtn = document.getElementById("playBtn");
const optionsGet = {
    method: "GET",
    headers: {
        accept: "application/json"
    }
};

const getGenres = async () => {
    const requestParams = `?api_key=${tmdbKey}`;
    const genreRequestEndpoint = "genre/movie/list";
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch, optionsGet);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse.genres;
        }
    } catch (err) {
        console.log(err);
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = "discover/movie";
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch, optionsGet);
        if (response.ok) {
          const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies;
        }
    } catch (err) {
        console.log(err);
    }
};
// getMovies();
const getMovieInfo = async movie => {
    const movieId = movie.id;
    const movieEndpoint = `movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch, optionsGet);
        if (response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse
            console.log(movieInfo)
            return movieInfo;
        }
    } catch (err) {
        console.log(err);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById("movieInfo");
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }
    const movies = await getMovies();
    const randomMovie = await getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;