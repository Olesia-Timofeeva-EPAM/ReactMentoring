import * as React from 'react';

import styles from "../styles/movie-delete.scss";

const DeleteMovie = () => {
    return (
        <>
            <div className={styles.title}>DELETE MOVIE</div>
            <div className={styles.text}>Are you sure you want to delete this movie?</div>
            <button className={styles.button}>CONFIRM</button>
        </>
    );
};

export default DeleteMovie;