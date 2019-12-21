import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems, selectCartHidden } from '../../redux/selectors/cart-selectors';
import { toggleCartHidden } from '../../redux/actions/cart-action';

const CartDropdown = ({ hidden, cartItems, history, dispatch }) => {
    return (
        <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`}>
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                    <div className="empty-message">Your cart is empty</div>
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                go to checkout
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));