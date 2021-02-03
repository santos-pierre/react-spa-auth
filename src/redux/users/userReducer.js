import { userTypes } from './userTypes';

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
