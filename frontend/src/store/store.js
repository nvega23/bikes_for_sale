import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import errors from './errors'
import post from './post';
import {postReducer} from './post';
import profile from './profile';
import review from './review';
import { cartReducer } from './cart';


const rootReducer = combineReducers({
    session,
    errors,
    post: postReducer, // Make sure the updated postReducer is used here
    profile,
    review,
    cart: cartReducer,
})

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;
