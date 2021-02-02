import { userTypes } from './userTypes';
import usersClient from './../../api/users/usersClient';

export const setCurrentUser = (user) => {
    return {
        type: userTypes.SET_USER,
        payload: user,
    };
};

export const getAuthUser = () => async (dispatch) => {
    try {
        const response = await usersClient.getAuthUser();
        dispatch(setCurrentUser(response.data));
        return Promise.resolve(response);
    } catch (errors) {
        dispatch(setCurrentUser(null));
        return Promise.reject(errors);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const response = await usersClient.logout();
        dispatch(setCurrentUser(null));
        return Promise.resolve(response);
    } catch (errors) {
        return Promise.resolve(errors);
    }
};
