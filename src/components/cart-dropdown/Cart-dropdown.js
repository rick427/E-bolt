import React from 'react';
import Button from '../button/Button';
import './cart-dropdown.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
           <div className="cart-items">
              <Button>Go To Checkout</Button>
            </div> 
        </div>
    )
}

export default CartDropdown;
