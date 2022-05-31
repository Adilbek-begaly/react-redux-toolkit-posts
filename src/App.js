import React from 'react';
import './components/style/App.css';
import Header from './components/header/Header';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;