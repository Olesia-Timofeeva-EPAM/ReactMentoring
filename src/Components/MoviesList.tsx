import * as React from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/movies-list.scss';

export interface MoviesListProps {
    movies: [];
  }

const MoviesListComponent: React.FC<MoviesListProps> = props => {
    const createList = () => {
        const {movies} = props;
        if(movies.length)
            return movies.map((movie, i) => <MovieCard {...movie} key={'${movie.title}_${i}'} />);
        else
            return (
                <span className={styles['movie-list__message']}>No movies that match your query</span>
            );
    };
    return <div className={styles['movie-list']}>{createList()}</div>;
};

export default MoviesListComponent;