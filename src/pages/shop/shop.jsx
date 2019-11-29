import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATA
    };

    renderList = () => {
        return this.state.collections.map(({ id, ...otherCollectionsProps }) => {
            return (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            );
        });
    };

    render() {
        return (
            <div className="shop-page">
                {this.renderList()}
            </div>
        );
    }
}

export default ShopPage;