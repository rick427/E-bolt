import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
//Component Routes
import HomePage from './components/pages/homepage/HomePage';
import Shop from './components/pages/shop/Shop';
import Header from './components/header/Header';
import Auth from './components/auth/auth';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={Shop}/>
        <Route path="/signin" component={Auth}/>
      </Switch>
    </div>
  );
}

export default App;
