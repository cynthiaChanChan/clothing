import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/actions/cart-action';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                <span>&#10005;</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    addItem,
    removeItem,
    clearItem: clearItemFromCart
};

export default connect(null, mapDispatchToProps)(CheckoutItem);