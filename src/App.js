import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
//Component Routes
import HomePage from './components/pages/homepage/HomePage';
import Shop from './components/pages/shop/Shop';


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={Shop}/>
    </div>
  );
}

export default App;
