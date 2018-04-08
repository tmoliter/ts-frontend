import * as ActionCreators from './action_creators';
import * as ActionTypes from './action_types';

describe("settings module action creators", () => {
    it("should create an action that initializes the settings state", () => {
        const settingsValue = {
            baseUrl: "http://someTestUrl.com/with/a/path"
        };
        const expectedOutput = {
            type: ActionTypes.INITIALIZE_SETTINGS,
            settings: settingsValue
        };
        expect(ActionCreators.initializeSettings(settingsValue))
            .toEqual(expectedOutput);
    });

    it("should create an action that overrides the settings state", () => {
        const settingsValue = {
            baseUrl: "http://someTestUrl.com/with/a/differentPath"
        };
        const expectedOutput = {
            type: ActionTypes.MODIFY_SETTINGS,
            settings: settingsValue
        };
        expect(ActionCreators.modifySettings(settingsValue))
            .toEqual(expectedOutput);
    });

    it("should create an action that updates a single key in the settings state", () => {
        const settingsValue = "http://someTestUrl.com/with/a/differentPath";
        const settingsKey = "baseUrl";
        const expectedOutput = {
            type: ActionTypes.MODIFY_SETTING,
            key: settingsKey,
            value: settingsValue
        };
        expect(ActionCreators.modifySetting(settingsKey, settingsValue))
            .toEqual(expectedOutput);
    });
});