import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import Index from './Components/Index/Index';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <>
            <Header />
            <Index />
          </>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
