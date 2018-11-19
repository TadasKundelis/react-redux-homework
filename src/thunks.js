import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList, setGenreList, addLog } from './actions';

export const getPopularMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};


export const fetchGenres = () => dispatch => {
  axios
    .get(endpoints.genres())
    .then(res => dispatch(setGenreList(res.data.genres)))
    .catch(error => console.log(error));
}


export const fetchGenresMovies = (genre) => (dispatch, getState) => {
  axios
    .get(endpoints.genreMovies(genre))
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error))
}

