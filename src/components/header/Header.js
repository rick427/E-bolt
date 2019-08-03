import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.scss';

const Header = ({currentUser}) => {
    return (
        <div className="header">
           <Link className="logo-container" to="/">
               <Logo className="logo"/>
           </Link>

           <div className="options">
               <NavLink className="option" activeClassName="active" to="/shop">
                   SHOP
               </NavLink>
               <NavLink className="option" to="/contact">
                   CONTACT
               </NavLink>
               {
                   currentUser ?
                   <div className="option" onClick={() => auth.signOut()}>LOG OUT</div>
                   :
                   <Link className="option" to="/signin"></Link>
               }
           </div>
        </div>
    )
}

const mapStateToProps = state => ({ //state here is the rootReducer
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
