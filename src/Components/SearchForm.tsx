import * as React from 'react';

import * as styles from '../styles/search-form.scss';
import  Toggle  from './Toggle';

export interface SearchFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, searchValue: string) => void;
    handleInput: (value: any) => void;
    searchValue: string;
    toggled_sortValue: string;
    handleSort: (value: any) => void;
  }

const SearchFormComponent: React.FC<SearchFormProps> = props => {
    return (
        <form className={styles.form} onSubmit={e => props.handleSubmit(e, props.searchValue)}>
            <span className={styles.findMovieText}>FIND YOUR MOVIE</span>
            <input type="text" name="search" placeholder="Search..." value={props.searchValue} onChange={props.handleInput }/>
            <input type="submit" value="Search"/>
            <Toggle labels={['Title', 'Genre']} type="sort" text="Sort by:" onChange={props.handleSort} value={'title' !== props.toggled_sortValue}
            />
        </form>
    );
};

export default SearchFormComponent;