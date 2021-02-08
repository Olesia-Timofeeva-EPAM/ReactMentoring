import * as React from 'react';

import * as styles from "../styles/movie-card.scss";

export interface MovieDetailsProps {
    title: string;
    rating: string;
    year: string;
    duration: string;
    description: string;
    genre: string;
    pictLink: string;
  }

const MovieDetails: React.FC<MovieDetailsProps> = props => {
    const {title, rating, year, duration, description, genre, pictLink} = props;
    return(
        <>
        <div className={styles['movie-details']}>
            <div>
                <img className={styles['movie-details__img']} src={pictLink} height="400" />
            </div>
            <div className={styles['movie-card__body']}>
                <div>
                    <h2 className={styles['movie-card__title']}>
                        {title}
                    </h2>
                    <span className={styles['movie-details__rating']}>
                        {rating}
                    </span>
                </div>
                <div className={styles['movie-card__subline']}>
                    <h2 className={styles['movie-card__title']}>
                        {year}
                    </h2>
                    <span className={styles['movie-details__rating']}>
                        {duration}
                    </span>
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieDetails;