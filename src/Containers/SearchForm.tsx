import * as React from 'react';
import {Component, useState} from 'react';
import SearchFormComponent from '../Components/SearchForm';

export interface SearchFormProps {
    handleSubmit: () => void;
  }

const SearchForm: React.FC<SearchFormProps>  = props => {
    
    const [searchValue, setSearchValue] = useState('');

    const handleInput = e => {
        setSearchValue(e.target.value);
    };

    return (
        <SearchFormComponent
            handleSubmit={props.handleSubmit}
            handleInput={handleInput}
            searchValue={searchValue}
        />
    );
};

export default SearchForm;