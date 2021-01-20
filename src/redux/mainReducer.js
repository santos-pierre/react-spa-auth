import { combineReducers } from 'redux';
import notificationReducer from './notifications/notificationReducer';
import userReducer from './users/userReducer';

const mainReducer = combineReducers({
    user: userReducer,
    notification: notificationReducer,
});

export default mainReducer;
