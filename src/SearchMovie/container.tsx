import * as React from 'react';
import { Component, useState } from 'react';

import SearchMovieComponent from './component';


export interface SearchMovieProps {
  setSortBy, 
  setSearchBy, 
  moviesLength,
  sortBy
}

const SearchMovie: React.FC<SearchMovieProps>  = props => {

 const {
  setSortBy, moviesLength, sortBy
} = props;

  const handleToggle = e => {
    setSortBy(e.target.value);
  };

    return (
        <SearchMovieComponent
        handleToggle={handleToggle}
        moviesCount={moviesLength}
        sortBy={sortBy}
        />
    ); 
    
}

export default SearchMovie;