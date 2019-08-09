import {TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM} from './cart-types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const clearItem = item => ({
    type: CLEAR_ITEM,
    payload: item
})