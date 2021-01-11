import * as React from 'react';

import styles from "../styles/movie-delete.scss";

const DeleteMovie = () => {
    return (
        <>
            <div className={styles.header}>
                <span className={styles.title}>DELETE MOVIE</span>                      
            </div>
            <div className={styles.title}>Are you sure you want to delete this movie?</div>
            <button>CONFIRM</button>
        </>
    );
};

export default DeleteMovie;