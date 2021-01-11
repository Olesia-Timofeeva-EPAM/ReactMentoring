import * as React from 'react';

import styles from "../styles/movie-details.scss";

export interface MovieDetailsProps {
    id: string;
    title: string;
    releaseDate: string;
    movieUrl: string;
    genre: string;
    overview: string;
    runTime: string;
    submitTitle: string;
    reset: () => void;
    submit: () => void;
    isEdit: boolean;
  }

const MovieDetails: React.FC<MovieDetailsProps> = props => {
    const {id, title, releaseDate, movieUrl, genre, overview, runTime, submitTitle, reset, submit, isEdit} = props;
    return(
        <>
            <div className={styles['movie-details__body']}>
                {isEdit} && <div>
                    <div className={styles['movie-details__detail-name']}>
                        ID
                    </div>      
                    <input className={styles['movie-details__detail-text']}>
                        {id}
                    </input> 
                </div>
                <div className={styles['movie-details__detail-name']}>
                    TITLE
                </div>      
                <input className={styles['movie-details__detail-text']}>
                    {title}
                </input>  
                <div className={styles['movie-details__detail-name']}>
                    RELEASE DATE
                </div>      
                <input className={styles['movie-details__detail-text']}>
                    {releaseDate}
                </input>   
                <div className={styles['movie-details__detail-name']}>
                    MOVIE URL
                </div>      
                <input className={styles['movie-details__detail-text']}>
                    {movieUrl}
                </input>   
                <div className={styles['movie-details__detail-name']}>
                    GENRE
                </div>      
                <select className={styles['movie-details__detail-text']}>
                    {genre}
                </select>   
                <div className={styles['movie-details__detail-name']}>
                    OVERVIEW
                </div>      
                <input className={styles['movie-details__detail-text']}>
                    {overview}
                </input>   
                <div className={styles['movie-details__detail-name']}>
                    RUNTIME
                </div>      
                <input className={styles['movie-details__detail-text']}>
                    {runTime}
                </input>  
                <button className={styles['movie-details__reset']} onClick={reset}>RESET</button> 
                <button className={styles['movie-details__submit']} onClick={submit}>{submitTitle}</button>        
            </div>
        </>
    );
}

export default MovieDetails;