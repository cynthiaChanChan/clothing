import { SET_CURRENT_USER } from '../type';

export const setCurrentUser = (currentUser) => ({
    type: SET_CURRENT_USER,
    payload: currentUser
});