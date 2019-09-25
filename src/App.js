/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Title from './components/Title';
import Main from './components/Main';

import './index.scss';

const App = () => {
  return (
    <div className="App">
      <Title />
      <section className="App_content">
        <Main />
      </section>
    </div>
  );
};

export default App;
