/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from './components/Title';
import Main from './components/Main';
import Details from './components/Details';
import FavoriteContext from './context/favoriteContext';

import './index.scss';

const App = () => {
  // const [favoriteCharts, setFavoriteCharts] = useState({});
  const favoriteState = useState({});
  // const favoriteState = { favoriteCharts, setFavoriteCharts };

  return (
    <div className="App">
      <Title />
      <section className="App_content">
        <Router>
          <FavoriteContext.Provider value={favoriteState}>
            <Route path="/" exact component={Main} />
            <Route path="/details/:id" component={Details} />
          </FavoriteContext.Provider>
        </Router>
      </section>
    </div>
  );
};

export default App;
