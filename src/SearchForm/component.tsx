import * as React from 'react';

import * as styles from '../styles/search-form.scss';
import  Toggle  from '../Components/Toggle';

export interface SearchFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, searchValue: string, searchType: string) => void;
    handleSearchByInput: (value: any) => void;
    handleSearchValueInput: (value: any) => void;
    searchValue: string;
    searchType: string;
    toggled_sortValue: string;
    handleSort: (value: any) => void;
  }

const SearchFormComponent: React.FC<SearchFormProps> = props => {
    return (
        <>
        <form className={styles.form} onSubmit={e => props.handleSubmit(e, props.searchValue, props.searchType)}>
            <span className={styles.findMovieText}>FIND YOUR MOVIE</span>
            <input type="text" name="search" placeholder="Search..." value={props.searchValue} onChange={props.handleSearchValueInput }/>
            <input type="submit" value="Search"/>
            <Toggle labels={['Title', 'Genre']} name="searchType" text="Search by:" values={['title', 'genres']} onChange={props.handleSearchByInput} 
                defaultValue={'title' !== props.searchType}
            />
            
        </form>
        <Toggle           
        labels={['Rate', 'Date']}
        values={['vote_average', 'release_date']}
        name="sortValue"
        text="Sort by:"
        onChange={props.handleSort}
        defaultValue={'vote_average' !== props.toggled_sortValue}
    />
    </>
    );
};

export default SearchFormComponent;