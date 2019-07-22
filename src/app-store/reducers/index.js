import { combineReducers } from 'redux';
import { pageListReducer } from './page';

export default combineReducers({
    pageList: pageListReducer
  });