import { userTypes } from './userTypes';

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_USER:
            return { ...state, user: action.payload };
        case userTypes.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case userTypes.SET_ERRORS:
            return { ...state, errors: action.payload };
        default:
            return state;
    }
};

export default userReducer;
