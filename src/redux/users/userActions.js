import { userTypes } from './userTypes';
import usersClient from './../../api/users/usersClient';

export const setCurrentUser = (user) => {
    return {
        type: userTypes.SET_USER,
        payload: user,
    };
};

export const setLoading = (loadingState) => {
    return {
        type: userTypes.SET_LOADING,
        payload: loadingState,
    };
};

export const setErrors = (errors) => {
    return {
        type: userTypes.SET_ERRORS,
        payload: errors,
    };
};

export const getAuthUser = () => async (dispatch) => {
    try {
        const response = await usersClient.getAuthUser();
        dispatch(setCurrentUser(response.data));
        dispatch(setLoading(false));
        return Promise.resolve(response);
    } catch (errors) {
        dispatch(setCurrentUser(null));
        dispatch(setLoading(false));
        dispatch(setErrors(errors));
        return Promise.reject(errors);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const response = await usersClient.logout();
        dispatch(setCurrentUser(null));
        dispatch(setLoading(false));
        return Promise.resolve(response);
    } catch (errors) {
        dispatch(setLoading(false));
        dispatch(setErrors(errors));
        return Promise.resolve(errors);
    }
};
