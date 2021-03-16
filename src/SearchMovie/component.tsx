import * as React from 'react';
import MoviesList from '../MoviesList/container.enhanced';
import SearchForm from '../SearchForm/container.enhanced';
import * as styles from "../styles/search-movie.scss";
import MovieFields from '../Components/MovieFields';
import { useState } from 'react';
import Toggle from '../Components/Toggle';

export interface SearchMovieProps {
    sortBy, 
    moviesCount, 
    handleToggle
  }

const SearchMovie: React.FC<SearchMovieProps>  = props => {
    const {
        sortBy, moviesCount, handleToggle
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

            <SearchForm />

            <span>{moviesCount + 'films are found'}</span>
            
            
            <MoviesList />
        </>
    );
};

export default SearchMovie;