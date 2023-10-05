import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
