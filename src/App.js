import React from 'react';
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


class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {

    //       setCurrentUser({
    //         id: snapShot.id, 
    //         ...snapShot.data()
    //       });

    //     });
    //   }
    //   else{
    //     setCurrentUser(userAuth);
    //   };
    // })
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
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/signin" render={() => 
            this.props.currentUser ? (
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
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(App);
