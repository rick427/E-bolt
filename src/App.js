import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
//Component Routes
import HomePage from './components/pages/homepage/HomePage';


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      
    </div>
  );
}

export default App;
