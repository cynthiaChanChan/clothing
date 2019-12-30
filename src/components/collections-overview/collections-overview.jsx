import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectShopCollectionsForPreview } from '../../redux/selectors/shop-selector';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            { collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} /> )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);