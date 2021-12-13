import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/user';
import addressesReducer from './address/address';

const reducer = combineReducers({
  user: userReducer,
  addresses: addressesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
