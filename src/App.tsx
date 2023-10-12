import React from 'react';
import Router from './routes/Router';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />

      <Router></Router>
    </>
  );
}

export default App;
