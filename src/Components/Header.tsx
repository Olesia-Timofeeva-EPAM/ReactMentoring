import * as React from 'react';
import * as styles from '../styles/header.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.title}>netflix</span>
        </header>
    )
}

export default Header;