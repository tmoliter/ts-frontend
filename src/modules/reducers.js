import { combineReducers } from 'redux';
import settingsReducer from './settings/reducer';

export { settingsReducer };

export default combineReducers({
    settingsReducer
});