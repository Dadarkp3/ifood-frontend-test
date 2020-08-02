import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <>
    <Navbar />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
