import React from 'react';

import styles from "../styles/movie-card.scss";

export interface MovieCardProps {
    title: string;
    year: string;
    genre: string;
    pictLink: string;
  }

const MovieCard: React.FC<MovieCardProps> = props => {
    const {title, year, genre, pictLink} = props;
    return(
        <>
        <div>
            <img className={styles['movie-card__img']} src={pictLink} height="400" />
            <div className={styles['movie-card__body']}>
                <div className={styles['movie-card__line']}>
                    <h2 className={styles['movie-card__title']}>
                        {title}
                    </h2>
                    <span className={styles['movie-card__year']}>
                        {year}
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