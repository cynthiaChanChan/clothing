import { FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_FAILURE } from '../type';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
    return {
        type: FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsSuccess = (collectionsMap) => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    };
};

export const fetchCollectionsFailure = (errMessage) => {
    return {
        type: FETCH_COLLECTIONS_FAILURE,
        payload: errMessage
    }
};

export const fetchCollectionsStartAsync = () => (
    dispatch => {
        const collectionsRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionsRef.get().then(snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collections));
        }).catch(error=> {
            dispatch(fetchCollectionsFailure(error.message));
        });
    }
);
