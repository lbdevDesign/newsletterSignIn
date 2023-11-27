import { combineReducers } from 'redux';
import emailReducer from './emailReducer';

const rootReducer = combineReducers({
    emails: emailReducer,
});

export default rootReducer;