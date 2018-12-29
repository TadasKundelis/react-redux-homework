import * as actions from '../src/actions';
import {
  initialMoviesState, moviesReducer,
} from '../src/reducers';

describe('moviesReducer', () => {
  it('should return initialState', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialMoviesState);
  });
  it('should set movie list', () => {
    const movies = ['a', 'b', 'c'];
    const expectedState = { ...initialMoviesState, list: movies };
    expect(moviesReducer(initialMoviesState, actions.setMovieList(movies))).toEqual(expectedState);
  });
  it('should add movie to hearted movies list', () => {
    const hearted = ['a'];
    const expectedState = { ...initialMoviesState, hearted };
    const action = {
      type: 'ADD_TO_HEARTED',
      movie: 'a',
    };
    expect(moviesReducer(initialMoviesState, action)).toEqual(expectedState);
  });
  it('should remove movie from hearted movies list', () => {
    const hearted = [];
    const expectedState = { ...initialMoviesState, hearted };
    const state = { ...initialMoviesState, hearted: ['a'] };
    const action = {
      type: 'REMOVE_FROM_HEARTED',
      movie: 'a',
    };
    expect(moviesReducer(state, action)).toEqual(expectedState);
  });
});
