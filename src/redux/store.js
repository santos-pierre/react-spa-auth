import mainReducer from './mainReducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'react_spa',
//     storage,
// };

// const persisterReducer = persistReducer(persistConfig, mainReducer);

export const store = createStore(
    /* If want to use persist replace by persisterReducer */
    mainReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
// export const persistor = persistStore(store);
