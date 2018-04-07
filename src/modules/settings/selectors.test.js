import * as selectors from './selectors';

describe("settings selectors", () => {

    it("should return the settings key of the state object", () => {
        const settingsState = {
            "baseUrl": ""
        }
        const state = {
            settings: settingsState
        }
        expect(selectors.getSettingsSelector(state)).toBe(settingsState);
    });

    it("should return the given key of the settings property of the state object", () => {
        const baseUrlValue = "http://api.someUrl.net/v1";
        const settingsState = {
            "baseUrl": baseUrlValue
        }
        const state = {
            settings: settingsState
        };
        const props = {
            settingsKey: "baseUrl"
        }
        expect(selectors.getSettingByKeySelector(state,props)).toBe(baseUrlValue);
    })
});