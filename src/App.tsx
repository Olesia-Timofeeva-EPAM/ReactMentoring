import * as React from 'react';
import Footer from './Components/Footer';
import styles from './styles/app.scss';
import Header from './Components/Header';
import ErrorBoundary from './Containers/ErrorBoundary';
import SearchMovie from './Containers/SearchMovie';

export default function App() {

  
  return (
    <>
      <Header/>
      <main className={styles.container}>
          <ErrorBoundary>
              <SearchMovie />
          </ErrorBoundary>
      </main>
      <Footer/>
    </>
  );
}