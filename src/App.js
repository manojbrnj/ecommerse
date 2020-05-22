import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Hats from './Component/Hats/Hats';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path='/' component={HomePage} ></Route>
      <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
