import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';

const CartDropdown = ({ hidden }) => {
    return (
        <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`}>
            <div className="cart-items"></div>
            <CustomButton>go to checkout</CustomButton>
        </div>
    );
};

const mapStatesToProps = ({ cart }) => ({
    hidden: cart.hidden
});
export default connect(mapStatesToProps)(CartDropdown);