import counterReducer from './counter';
import mylistReducer from './mylist';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    mylist: mylistReducer
});
export default allReducers;