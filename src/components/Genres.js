import React from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../thunks';
import { setSelectedGenre } from '../actions';

class Genres extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { fetchGenres } = this.props;
    fetchGenres();
  }

 
  render() {
    const { genres } = this.props;
    return (
      <div className="genres">
        {genres.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => this.props.setSelectedGenre(genre.id, genre.name)}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  genres: state.genres.list
})


const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  setSelectedGenre: (genre, name) => dispatch(setSelectedGenre(genre, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Genres)
