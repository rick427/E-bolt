import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';

import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Auth from './pages/auth/auth';
import Checkout from './pages/checkout/Checkout';

import {selectCurrentUser} from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';


const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
    
  }, [checkUserSession])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={Shop}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/signin" render={() => 
          currentUser ? (
            <Redirect to="/" />
          ) : (
            <Auth/>
          )
          }
        />
      </Switch>
    </div>
  );
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
