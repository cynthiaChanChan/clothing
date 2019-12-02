import { SET_CURRENT_USER } from '../type';

const setCurrentUser = (currentUser) => ({
    type: SET_CURRENT_USER,
    payload: currentUser
});

export default setCurrentUser;