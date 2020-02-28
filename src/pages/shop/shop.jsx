import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { fetchCollectionsStartAsync } from '../../redux/actions/shop-action';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/selectors/shop-selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, collectionsIsFetching, collectionsIsLoaded } = this.props;

        return (
            <div className="shop-page">
                <Route 
                    path={match.path} 
                    exact 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={collectionsIsFetching} {...props} />}>
                </Route>
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionWithSpinner isLoading={!collectionsIsLoaded} {...props} />}>
                </Route>
            </div>
        );
    }
    
};

const mapStateToProps = createStructuredSelector({
    collectionsIsFetching: selectIsCollectionsFetching,
    collectionsIsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = {
    fetchCollectionsStartAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);