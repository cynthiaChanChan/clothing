import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route path={match.path} exact component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:collectionId`} component={Collection}></Route>
        </div>
    );
};

export default ShopPage;