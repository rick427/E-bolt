import React from 'react';
import './header.scss';

import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import {selectCurrentUser} from '../../redux/user/user-selector';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';


const Header = ({currentUser, hidden}) => {
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
               <CartIcon/>
           </div>
           {hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({ //state here is the rootReducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
