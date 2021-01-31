import mainReducer from './mainReducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

export const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
