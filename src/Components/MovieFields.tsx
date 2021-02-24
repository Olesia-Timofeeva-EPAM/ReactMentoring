import * as React from 'react';
import { useEffect, useState } from 'react';

import * as styles from "../styles/movie-fields.scss";

export interface MovieFieldsProps {
    id?: string;
    title: string;
    releaseDate?: string;
    movieUrl?: string;
    genre?: string;
    overview?: string;
    runTime?: string;
    reset: () => void;
    submit: (e) => void;
    isEdit: boolean;
    show: boolean;
  }

const MovieFields: React.FC<MovieFieldsProps> = props => {
    const {id = "", title, releaseDate, movieUrl, genre, overview, runTime, reset, submit, isEdit, show} = props;
    const [header, setHeader] = useState('');

    useEffect(() => {
        setHeader(title);
        }
    );
        
    function onSubmit(){
        submit(props);
      }

    if(!show)
    return null;

    return(        
        <>
        <div className={styles['header']}>{header}</div>
            <div className={styles['movie-details']}>
               {isEdit ?
                <div>
                    <div className={styles['movie-details__detail-name']}>
                        ID
                    </div>      
                    <input className={styles['movie-details__detail-text']} value={id} />
                </div> : null}
                <div className={styles['movie-details__detail-name']}>
                    TITLE
                </div>      
                <input className={styles['movie-details__detail-text']} value={title} />
                <div className={styles['movie-details__detail-name']}>
                    RELEASE DATE
                </div>      
                <input className={styles['movie-details__detail-text']} value={releaseDate} />
                <div className={styles['movie-details__detail-name']}>
                    MOVIE URL
                </div>      
                <input className={styles['movie-details__detail-text']} value={movieUrl} />
                <div className={styles['movie-details__detail-name']}>
                    GENRE
                </div>      
                <select className={styles['movie-details__detail-text']}>
                    {genre}
                </select>   
                <div className={styles['movie-details__detail-name']}>
                    OVERVIEW
                </div>      
                <input className={styles['movie-details__detail-text']} value= {overview} />
                <div className={styles['movie-details__detail-name']}>
                    RUNTIME
                </div>      
                <input className={styles['movie-details__detail-text']} value={runTime} />
                <div className={styles['movie-details__buttons']}>
                    <button className={styles['movie-details__reset']} onClick={reset}>RESET</button> 
                    <button className={styles['movie-details__submit']} onClick={onSubmit}>SUBMIT</button>   
                </div>     
            </div>
        </>
    );
}

export default MovieFields;