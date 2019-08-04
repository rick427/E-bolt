import React from 'react';
import {connect} from 'react-redux';
import Button from '../button/Button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
           <div className="cart-items">
               {cartItems.map(cartItem => (  
                   <CartItem key={cartItem.id} item={cartItem}/>
               ))}
           </div>
              <Button>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
