import * as React from 'react';
import Footer from './Footer';
import * as styles from '../styles/app.scss';
import Header from './Header';
import ErrorBoundary from '../Containers/ErrorBoundary';
import SearchMovie from '../Containers/SearchMovie';

const App = () => {  
  return (
    <>
      <Header/>
      <main className={styles.container}>
          <ErrorBoundary>
              <SearchMovie
                />
          </ErrorBoundary>
      </main>
      <Footer/>
    </>
  );
}
export default App;