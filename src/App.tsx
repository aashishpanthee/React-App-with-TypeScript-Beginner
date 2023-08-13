import React from 'react';
import './App.css';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Greeter person="Aashish"/>
      <Greeter person="Sumit"/>
      <Greeter person="Aryal"/>
    </div>
  );
}

export default App;
