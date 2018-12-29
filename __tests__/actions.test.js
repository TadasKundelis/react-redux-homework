import configureStore from 'redux-mock-store';
import * as actions from '../src/actions';
import { initialState } from '../src/reducers';

const mockStore = configureStore();
const store = mockStore(initialState);

describe('setMovieList action creator', () => {
  it('should create an action to set movie list', () => {
    store.dispatch(actions.setMovieList([]));
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe('setGenreList action creator', () => {
  it('should create an action to set genre list', () => {
    store.dispatch(actions.setGenreList([]));
    expect(store.getActions()).toMatchSnapshot();
  });
});
