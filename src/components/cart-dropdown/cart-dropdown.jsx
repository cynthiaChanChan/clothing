import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems, selectCartHidden } from '../../redux/selectors/cart-selectors';

const CartDropdown = ({ hidden, cartItems }) => {
    return (
        <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`}>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems
});
export default connect(mapStateToProps)(CartDropdown);