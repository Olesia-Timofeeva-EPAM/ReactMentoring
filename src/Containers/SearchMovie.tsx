import * as React from 'react';
import { Component, useState } from 'react';

import SearchMovieComponent from '../Components/SearchMovie';

import * as data  from '../data/data.json';

const SearchMovie = props => {
 const [searchValue, setSearchValue] = useState('');
 const [toggled_sortValue, setToggledSortValue] = useState('title');

    const handleSubmit = React.useCallback((e, searchValue) => {
        e.preventDefault();
        setSearchValue(searchValue);
    }, [setSearchValue]);

    const handleSort = React.useCallback((e, toggled_sortValue) => {
      e.preventDefault();
      setToggledSortValue(toggled_sortValue === 'title' ? 'date' : 'title');
      getMovies();
  }, [setToggledSortValue]);

  const  getMovies = () => {
        let { movies } = data;
        movies = [...movies].sort((a, b) => {
          return a[toggled_sortValue] > b[toggled_sortValue] ? 1 : -1
        });
        if (searchValue !== '') {
          movies = movies.filter(el => {
            return el.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
          });
        }
        return movies;
      };

    return (
        <SearchMovieComponent
            handleSubmit={handleSubmit}
            moviesCount={getMovies().length}
            movies={getMovies()}
            toggled_sortValue={toggled_sortValue}
            handleSort={handleSort}
            {...props}
        />
    ); 
    
}

export default SearchMovie;