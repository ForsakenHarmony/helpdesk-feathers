import { combineReducers } from 'redux';
import { routerReducer } from 'preact-router-redux/lib/reducer';
import tickets from './tickets';


export default combineReducers({
  tickets,
  routing: routerReducer,
});
