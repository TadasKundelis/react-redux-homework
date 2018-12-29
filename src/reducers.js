import { combineReducers } from 'redux';

export const initialMoviesState = {
  list: [],
  hearted: [],
};

export const moviesReducer = (state = initialMoviesState, action) => {
  const { hearted } = state;
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      // console.log(action.list);
      return { ...state, list: action.list };
    case 'ADD_TO_HEARTED':
      return { ...state, hearted: [...hearted, action.movie] };
    case 'REMOVE_FROM_HEARTED':
      return { ...state, hearted: hearted.filter(movie => movie !== action.movie) };
    default:
      return state;
  }
};


const initialGenresState = {
  list: [],
  selected: null,
};

export const genresReducer = (state = initialGenresState, action) => {
  switch (action.type) {
    case 'SET_GENRE_LIST':
      return { ...state, list: action.list };
    case 'SET_SELECTED_GENRE':
      return { ...state, selected: action.genre };
    default:
      return state;
  }
};

const initialLogState = [];

export const logsReducer = (state = initialLogState, action) => {
  switch (action.type) {
    case 'ADD_LOG':
      return [...state, action.log];
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  logs: logsReducer,
});
