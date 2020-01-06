import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';
import { updateCollections } from '../../redux/actions/shop-action';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    };
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const collectionsRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collections);
            this.setState({isLoading: false});
        });
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;

        return (
            <div className="shop-page">
                <Route 
                    path={match.path} 
                    exact 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}>
                </Route>
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionWithSpinner isLoading={isLoading} {...props} />}>
                </Route>
            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }
    
};

const mapDispatchToProps = {
    updateCollections
};

export default connect(null ,mapDispatchToProps)(ShopPage);