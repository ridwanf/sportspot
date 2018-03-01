import { combineReducers } from 'redux';
import authReducer from './authReducer';
import filterReducer from './filterReducer';
import addressSugestionReducer from './addressSugestionReducer';

export default combineReducers({
  auth: authReducer,
  filter: filterReducer,
  addressSugestion: addressSugestionReducer,
});
