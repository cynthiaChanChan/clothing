import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/selectors/shop-selector';
import CollectionItem from '../collection-item/collection-item';

const Collection = ({ collection: { title, items } }) => {
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem  className="collection-item" key={item.id} item={item} />
                ))} 
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);