import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';
import { updateCollections } from '../../redux/actions/shop-action';


class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const collectionsRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collections);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route path={match.path} exact component={CollectionsOverview}></Route>
                <Route path={`${match.path}/:collectionId`} component={Collection}></Route>
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