import axios from "axios";

const BASE = 'https://api.themoviedb.org/3/';
const KEY = '?api_key=457a0be892b7eaa9d80ace4b1a3dd2c6';
// const LANG = '&language=en-US';


export async function fetchTrendingMovies() {
    const response = await axios(BASE + `trending/movie/day` + KEY);
    return response.data.results;
};

export async function searchMovies(q) {
  const response = await axios(BASE + `search/movie` + KEY + `&query=` + q + '&page=1&include_adult=false');
    // const response = await axios(BASE +'search/movie' + KEY + LANG +'/&query=' + q +'&page=1&include_adult=false');
    return response.data.results;
}

export async function getMovieDetails(movieId) {
    const response = await axios(BASE + 'movie/' + movieId  +KEY);
    return response.data;
}

export async function getMovieReviews(movieId) {
    const response = await axios(BASE + 'movie/' + movieId + '/reviews' + KEY);
    return response.data.results;
}

export async function getMovieCast(id) {
    const response = await axios(BASE + 'movie/' + id + '/credits' + KEY);
    return response.data.cast;
}