import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// import mainReducer from './reducers/index';
import reducer from './reducers/todos';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;