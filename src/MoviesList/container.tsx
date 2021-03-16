import * as React from 'react';
import { useState } from 'react';

import MoviesListComponent from './component';

export interface MoviesListProps {
    movies: [];
    getMovies: () => void;
    getMoviesByGenre: () => void;
    sortMovies: () => void;
    searchBy;
    sortBy;
    currentMovieGenre: string,
  }

const MoviesListContainer : React.FC<MoviesListProps> = props => {
    const [searchBy,setSearchBy] = useState({searchValue: "", searchType: 'desc'});
    const [currentMovieGenre,setCurrentMovieGenre] = useState(new Object());
    const [sortBy,setSortBy] = useState({sortValue: "", sortType: 'ASC'});

    React.useEffect(() => {
    if (
      props.searchBy.searchValue !== searchBy.searchValue ||
      props.searchBy.searchType !== searchBy.searchType
    ) {
        setSearchBy({searchValue: props.searchBy.searchValue, searchType: props.searchBy.searchType});
        props.getMovies();
        return;
    }
    if (
      props.sortBy.sortValue !== sortBy.sortValue ||
      props.sortBy.sortType !== sortBy.sortType
    ) {
        setSortBy({sortValue: props.sortBy.sortValue, sortType: props.sortBy.sortType});
        props.sortMovies();
        return;
    }
    if (props.currentMovieGenre !== currentMovieGenre) {
        setCurrentMovieGenre(props.currentMovieGenre );
        props.getMoviesByGenre();
        return;
    }
  });
  
    return <MoviesListComponent movies={props.movies} />;
};

export default MoviesListContainer;