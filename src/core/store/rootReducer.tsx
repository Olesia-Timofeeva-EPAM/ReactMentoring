import { combineReducers } from 'redux';
import  searchMoviesReducer from '../../SearchForm/reducer';
import  sortMoviesReducer from '../../SearchMovie/reducer';
import  movieDetailsReducer  from '../../MovieCard/reducer';
import   allMoviesReducer  from '../../MoviesList/reducer';

const formatParams = combineReducers({ searchBy: searchMoviesReducer, sortBy: sortMoviesReducer });

export default combineReducers({
  allMovies: allMoviesReducer,
  formatParams: formatParams,
  currentMovie: movieDetailsReducer,
});