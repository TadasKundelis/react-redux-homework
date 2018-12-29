import React from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../thunks';
import { setSelectedGenre } from '../actions';

export class Genres extends React.Component {
  componentDidMount() {
    const { fetchGenres } = this.props;
    fetchGenres();
  }


  render() {
    const { genres, setSelectedGenre } = this.props;
    return (
      <div className="genres">
        {genres.map(({ id, name }) => (
          <div key={id} className="genre" onClick={() => setSelectedGenre(id, name)}>
            {name}
          </div>
        ))}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  genres: state.genres.list,
});


const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  setSelectedGenre: (genre, name) => dispatch(setSelectedGenre(genre, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
