import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/actions/cart-action';
import CustomButton from '../custom-button/custom-button';

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted='true'>Add to cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = {
    addItem
};

export default connect(null, mapDispatchToProps)(CollectionItem);