import * as React from 'react';

import * as styles from "../styles/movie-card.scss";

export interface MovieCardProps {
    title: string;
    release_date: string;
    genre: string;
    poster_path: string;
    vote_average: number;
    runtime: number;
  }

const MovieCard: React.FC<MovieCardProps> = props => {
    const {title, release_date, genre, poster_path, vote_average, runtime} = props;
    return(
        <>
        <div>
            <div className={styles['movie-card__container']}>
                <img className={styles['movie-card__img']} src={poster_path} height="400" />
                <button className={styles['movie-card__btn']}>...</button>
            </div>
            <div className={styles['movie-card__body']}>
                <div className={styles['movie-card__line']}>
                    <h2 className={styles['movie-card__title']}>
                        {title}
                    </h2>
                    <span className={styles['movie-card__year']}>
                        {release_date}
                    </span>
                </div>
                <div className={styles['movie-card__subline']}>
                    <div className={styles['movie-card__genre']}>
                        {genre}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieCard;