import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selector';
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

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
