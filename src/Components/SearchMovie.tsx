import * as React from 'react';
import MoviesList from './MoviesList';
import SearchForm from '../Containers/SearchForm';

export interface SearchMovieProps {
    moviesCount: number;
    handleSubmit: () => void;
    movies: []
  }

const SearchMovie: React.FC<SearchMovieProps>  = props => {
    const {
        moviesCount,
        handleSubmit,
        movies
    } = props;

    return (
        <>
            <SearchForm
                handleSubmit={handleSubmit}
            />
            <span>{moviesCount + 'films are found'}</span>
            <MoviesList movies={movies} />
        </>
    );
};

export default SearchMovie;