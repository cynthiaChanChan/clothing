import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/selectors/collection-selector';
import CollectionPreview from '../collection-preview/collection-preview';

const collectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            { collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} /> )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(collectionOverview);