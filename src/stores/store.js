import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import config from '../config';
import reducer from '../modules/reducers';

export const getStore = () => {
    const middlewares = [ thunk ];
    const enhancers = [];
    if(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    return createStore(reducer, { settingsReducer: config }, compose(
        applyMiddleware(...middlewares),
        ...enhancers
    ));
};