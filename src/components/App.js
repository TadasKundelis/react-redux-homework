import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import {
  setMovieList, addHeart, removeHeart, addLog
} from '../actions';
import { getPopularMovies } from '../thunks';

class App extends React.Component {
  componentDidMount() {
    const log = 'Aplikacija uzsikrove';

    const { onGetPopularMovies, onAppLoaded } = this.props;

    onGetPopularMovies();
    onAppLoaded(log);
  }

  render() {
    const {
      hearted, movies, onAddHeart, onRemoveHeart
    } = this.props;
    return (
      <React.Fragment>
        <Genres onChangeList={this.setMovieList} />

        <div className="cards">
          {movies.map(movie => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => onAddHeart(movie.id, movie.title)}
              onRemoveHeart={() => onRemoveHeart(movie.id, movie.title)}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}


export default connect(
  state => ({
    movies: state.movies.list,
    hearted: state.movies.hearted
  }),
  dispatch => ({
    onGetPopularMovies: () => dispatch(getPopularMovies()),
    onSetMovieList: list => dispatch(setMovieList(list)),
    onAddHeart: (id, title) => dispatch(addHeart(id, title)),
    onRemoveHeart: (id, title) => dispatch(removeHeart(id, title)),
    onAppLoaded: log => dispatch(addLog(log))
  })
)(App);
