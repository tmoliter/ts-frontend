import * as ActionTypes from './action_types';

export function initializeSettings(settings) {
    return {
        type: ActionTypes.INITIALIZE_SETTINGS,
        settings
    };
};

export function modifySettings(settings) {
    return {
        type: ActionTypes.MODIFY_SETTINGS,
        settings
    };
};

export function modifySetting(key, value) {
    return {
        type: ActionTypes.MODIFY_SETTING,
        key,
        value
    };
};