import React from 'react';

import {connect} from 'react-redux';
//import {NavLink, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import {selectCurrentUser} from '../../redux/user/user-selector';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import { signOutStart } from '../../redux/user/user-actions';


const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
           <LogoContainer to="/">
               <Logo className="logo"/>
           </LogoContainer>

           <OptionsContainer>
               <OptionLink to="/shop">
                   SHOP
               </OptionLink>
               <OptionLink to="/contact">
                   CONTACT
               </OptionLink>
               {
                   currentUser ?
                   <OptionLink as='div' onClick={signOutStart}>LOG OUT</OptionLink>
                   :
                   <OptionLink className="option" to="/signin">LOGIN</OptionLink>
               }
               <CartIcon/>
           </OptionsContainer>
           {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({ //state here is the rootReducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
