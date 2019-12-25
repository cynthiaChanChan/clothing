import { TOGGLE_CART_HIDDEN, ADD_ITEM,  REMOVE_ITEM, CLEAR_ITEM_FROM_CART } from '../type';
import { addItemToArray, removeItemToArray } from '../../utils/utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToArray(state.cartItems, action.payload)
            };
        case  CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToArray(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;