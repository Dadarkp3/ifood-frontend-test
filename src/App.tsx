import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import Routes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <>
    <Normalize />
    <Navbar />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
