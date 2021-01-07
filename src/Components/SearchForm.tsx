import * as React from 'react';

import styles from '../styles/search-form.scss';

export interface SearchFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, state: Object) => void;
    handleInput: (value: any) => void;
    state: object;
  }

const SearchFormComponent: React.FC<SearchFormProps> = props => {
    return (
        <form className={styles.form} onSubmit={e => props.handleSubmit(e, props.state)}>
            <input type="text" name="search" placeholder="Search..." onChange={props.handleInput }/>
            < input type="submit" value="Search" />
        </form>
    );
};

export default SearchFormComponent;