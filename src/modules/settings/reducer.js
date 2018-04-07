import * as ActionTypes from './action_types';

export default function(state={}, action) {
    switch(action.type) {
        case ActionTypes.INITIALIZE_SETTINGS: {
            return Object.assign({}, state, action.settings);
        }
        case ActionTypes.MODIFY_SETTINGS: {
            return Object.assign({}, state, action.settings);
        }
        case ActionTypes.MODIFY_SETTING: {
            return Object.assign({}, state, { [action.key]: action.value });
        }
        default: {
            return state;
        }
    }
}