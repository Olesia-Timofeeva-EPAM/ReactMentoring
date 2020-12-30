import React from 'react';
import styles from '../styles/header.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.title}>netflix</span>
        </header>
    )
}

export default Header;