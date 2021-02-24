import * as React from 'react';
import MoviesList from './MoviesList';
import SearchForm from '../Containers/SearchForm';
import * as styles from "../styles/search-movie.scss";
import MovieFields from './MovieFields';
import { useState } from 'react';

export interface SearchMovieProps {
    moviesCount: number;
    handleSubmit: () => void;
    movies: [];
    toggled_sortValue: string;
    handleSort: () => void;
  }

const SearchMovie: React.FC<SearchMovieProps>  = props => {
    const {
        moviesCount,
        handleSubmit,
        movies,
        toggled_sortValue,
        handleSort
    } = props;

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
      }

      function submitAdd(e){
          //TODO: add new movie
          let data = e;
        setIsOpen(false);
      }

    return (
        <>
            <button className={styles['search-movie__addBtn']} onClick={openModal}>+ ADD MOVIE</button>
            <MovieFields isEdit={false} title={'Add Movie'} reset={closeModal} submit={submitAdd} show={modalIsOpen}/> 

            <SearchForm
                handleSubmit={handleSubmit} toggled_sortValue={toggled_sortValue} handleSort={handleSort} />

            <span>{moviesCount + 'films are found'}</span>
            
            <MoviesList movies={movies} />
        </>
    );
};

export default SearchMovie;