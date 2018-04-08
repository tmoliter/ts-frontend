import settingsReducer from './reducer';
import * as ActionTypes from './action_types';
describe("settings reducer", () => {
    it("should return the initial state", () => {
        expect(settingsReducer(undefined, {})).toEqual({});
    });
    
    it("should handle INITIALIZE_STATE correctly", () => {
        const newState = {
            baseUrl: "http://someApi.com/api/v1/"
        };
        const action = {
            type: ActionTypes.INITIALIZE_SETTINGS,
            settings: newState
        };
        expect(settingsReducer({}, action)).toEqual(newState);
    });

    it("should handle MODIFY_SETTINGS correctly", () => {
        const oldState = {
            baseUrl: "http://someApi.com/api/v1"
        };
        const newState = {
            baseUrl: "http://someApi.com/api/v2"
        };
        const action = {
            type: ActionTypes.MODIFY_SETTINGS,
            settings: newState
        };
        expect(settingsReducer(oldState, action)).toEqual(newState);
    });

    it("should handle MODIFY_SETTING correctly", () => {
        const oldState = {
            baseUrl: "http://someApi.com/api/v1"
        };
        const newValue = "http://someApi.com/api/v2"
        const keyToModify = "baseUrl";
        const action = {
            type: ActionTypes.MODIFY_SETTING,
            key: keyToModify,
            value: newValue
        };
        expect(settingsReducer(oldState, action)).toHaveProperty(keyToModify, newValue);
    });
    
});