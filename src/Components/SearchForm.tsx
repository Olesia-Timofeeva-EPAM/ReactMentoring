import * as React from 'react';

import * as styles from '../styles/search-form.scss';

export interface SearchFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, searchValue: string) => void;
    handleInput: (value: any) => void;
    searchValue: string;
  }

const SearchFormComponent: React.FC<SearchFormProps> = props => {
    return (
        <form className={styles.form} onSubmit={e => props.handleSubmit(e, props.searchValue)}>
            <span className={styles.findMovieText}>FIND YOUR MOVIE</span>
            <input type="text" name="search" placeholder="Search..." value={props.searchValue} onChange={props.handleInput }/>
            <input type="submit" value="Search"/>
        </form>
    );
};

export default SearchFormComponent;