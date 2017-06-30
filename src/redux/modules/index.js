import { combineReducers } from 'redux';
import orders from './orders';
import auth from './auth';

export default combineReducers({
  orders,
  auth
});