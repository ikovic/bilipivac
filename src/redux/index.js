import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './modules';

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;
