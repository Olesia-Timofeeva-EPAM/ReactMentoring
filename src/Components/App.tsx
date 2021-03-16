import * as React from 'react';
import Footer from './Footer';
import * as styles from '../styles/app.scss';
import Header from './Header';
import ErrorBoundary from '../ErrorBoundary/container';
import SearchMovie from '../SearchMovie/container.enhanced';

import {Provider} from '../../node_modules/react-redux';
import store from '../core/store/store';

const App = () => {  
  return (
    <Provider store={store}>
      <Header/>
      <main className={styles.container}>
          <ErrorBoundary>
              <SearchMovie
                />
          </ErrorBoundary>
      </main>
      <Footer/>
    </Provider>
  );
}
export default App;