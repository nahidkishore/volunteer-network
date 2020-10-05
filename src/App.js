import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Home/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Home></Home>
    </div>
  );
}

export default App;
