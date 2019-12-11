
import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import StyleReducer from './reducers/StyleReducer'

const Reducers = combineReducers({

    auth:AuthReducer,
    style:StyleReducer
    

});

export default Reducers;

