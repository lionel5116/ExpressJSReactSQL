import {combineReducers} from 'redux'
import login from './login';
import alert from './alert';

const allReducers = combineReducers({
    login,
    alert
})
 
export default allReducers;