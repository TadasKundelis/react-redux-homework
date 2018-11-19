import { getFormatedDate } from "./utils";
import { fetchGenresMovies } from "./thunks";

export const setMovieList = (list) => ({
  type: 'SET_MOVIE_LIST',
  list,
});


export const setGenreList = (list) => ({
  type: 'SET_GENRE_LIST',
  list
})

export const setSelectedGenre = (genre, genreName) => (dispatch, getState) => {
  if (getState().genres.selected === genre) return;
  const log = `Zanras pakeistas i ${genreName}`;
  dispatch(fetchGenresMovies(genre));
  dispatch(addLog(log));
  dispatch({
    type: 'SET_SELECTED_GENRE',
    genre
  })
}

export const addHeart = (movie, title) => dispatch => {
  const log = `${title} buvo uzsirdintas`;
  dispatch(addLog(log));
  dispatch ({
    type: 'ADD_TO_HEARTED',
    movie
  })
}

export const removeHeart = (movie, title) => dispatch => {
  const log = `${title} buvo nusirdintas`;
  dispatch(addLog(log));
  dispatch({
    type: 'REMOVE_FROM_HEARTED',
    movie
  })
}

export const appLoaded = (log) => dispatch => {
  dispatch(addLog(log))
}

export const addLog = (log) => ({
  type: "ADD_LOG",
  log: getFormatedDate() + log
})










