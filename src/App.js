import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
//Component Routes
import HomePage from './components/pages/homepage/HomePage';
import Shop from './components/pages/shop/Shop';
import Header from './components/header/Header';
import Auth from './components/auth/auth';
import {auth} from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
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
}

export default App;
