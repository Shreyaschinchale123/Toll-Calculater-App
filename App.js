// src/App.js
import React from 'react';
import Header from './components/Header';
import CalculateTollButton from './components/CalculateTollButton';
import RouteVisualization from './components/RouteVisualization';

function App() {
  return (
    <div>
      <Header />
      <CalculateTollButton />
      <RouteVisualization />
    </div>
  );
}

export default App;
