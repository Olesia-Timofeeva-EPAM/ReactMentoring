import * as React from 'react';
import {Component, useState} from 'react';
import SearchFormComponent from './component';

export interface SearchFormProps {
    //handleSubmit: () => void;
    //toggled_sortValue: string;
    //handleSort: () => void;
    setSearchBy: (a) => void;
  }

const SearchForm: React.FC<SearchFormProps>  = props => {
 
  const [searchType,setSearchType] = useState('title');
  const [searchValue,setSearchValue] = useState('');
  const [sortValue,setSortValue] = useState('vote_average');

    const handleSearchTypeInput = e => {
      var value = e.target.value;
      setSearchType(value);
    };

    const handleSearchValueInput = e => {
      var value = e.target.value;
      setSearchValue(value);
    };

    const handleSortValue = e => {
      var value = e.target.value;
      setSortValue(value);
    };

    const handleSubmit = (e, searchValue, searchType) => {
        e.preventDefault();
        if (searchValue.length > 3 || searchValue === '') {
          window.scrollTo(0, 0);
          props.setSearchBy({searchType, searchValue});
        }
      };

    return (
        <SearchFormComponent 
            handleSubmit={handleSubmit}
            handleSearchByInput={handleSearchTypeInput}
            handleSearchValueInput={handleSearchValueInput}
            searchValue={searchValue}
            toggled_sortValue={sortValue}
            handleSort={handleSortValue}
            searchType={searchType}
        />
    );
};

export default SearchForm;