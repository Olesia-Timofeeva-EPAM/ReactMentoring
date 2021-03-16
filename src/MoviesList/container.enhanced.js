import {connect} from 'react-redux';
import MoviesListContainer from './container';
import {getMovies, sortMovies, getMoviesByGenre} from './actions';
import {
    allMoviesSelector,
    sortBySelector,
    searchBySelector,
    currentMovieGenreSelector,} from '../core/store/selectors';

export const mapStateToProps = state => ({
    movies: allMoviesSelector(state),
  searchBy: searchBySelector(state),
  sortBy: sortBySelector(state),
  currentMovieGenre: currentMovieGenreSelector(state),
});

const mapDispatchToProps = {getMovies, sortMovies, getMoviesByGenre};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoviesListContainer);