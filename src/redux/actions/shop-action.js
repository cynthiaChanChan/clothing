import { UPDATE_COLLECTIONS } from '../type';

export const updateCollections = (collectionsMap) => {
    return {
        type: UPDATE_COLLECTIONS,
        payload: collectionsMap
    };
};