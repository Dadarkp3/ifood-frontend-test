import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
    <Footer />
    <GlobalStyle />
  </>
);

export default App;
