import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route } from 'react-router-dom';
import Hats from './Component/Hats/Hats';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} ></Route>
      <Route  path='/shop/hats' component={Hats} ></Route>

    </div>
  );
}

export default App;
