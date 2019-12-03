import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/actions/cart-action';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispathToProps = { 
    toggleCartHidden 
};

export default connect(null, mapDispathToProps)(CartIcon);