import * as React from 'react';
import { Component, useState } from 'react';
import { setConstantValue } from 'typescript';

import SearchMovieComponent from '../Components/SearchMovie';

import * as data  from '../data/data.json';

const SearchMovie = props => {
 const [searchValue, setSearchValue] = useState('');

    const handleSubmit = React.useCallback((e, searchValue) => {
        e.preventDefault();
        setSearchValue(searchValue);
    }, [setSearchValue]);

  const  getMovies = () => {

        let { movies } = data;
        movies = [...movies].sort((a, b) => {
          return b[searchValue] - a[searchValue];
        });
        if (searchValue !== '') {
          movies = movies.filter(el => {
            return el[searchValue].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
          });
        }
        return movies;
      };

    return (
        <SearchMovieComponent
            handleSubmit={handleSubmit}
            moviesCount={getMovies().length}
            movies={getMovies}
            {...props}
        />
    ); 
    
}

export default SearchMovie;