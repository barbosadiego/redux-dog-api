import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from '../reducers/dogReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
