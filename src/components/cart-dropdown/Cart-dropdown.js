import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';
import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
           <div className="cart-items">
               {cartItems.length ? cartItems.map(cartItem => (  
                   <CartItem key={cartItem.id} item={cartItem}/>
               ))
               :
               <span className="empty-message">Your Cart is Empty</span>
              }
           </div>
              <Button onClick={() => {
                  history.push('/checkout')
                  dispatch(toggleCartHidden())
              }}>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
