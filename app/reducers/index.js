import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import auth from './auth';
import messages from './messages';

const rootReducer = combineReducers({
  messages,
  auth,
  router: routerStateReducer
});

export default rootReducer;
