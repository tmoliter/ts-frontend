import { makeSelectorUsingStateKey } from '../../util';

export const getSettingsSelector = (state, props) => {
    return state.settings;
}

export const getSettingByKeySelector = (state, ownProps) => {
    return state.settings[ownProps.settingsKey];
}

export const makeGetSettingsSelector = (stateKey) => makeSelectorUsingStateKey(stateKey, getSettingsSelector);

export const makeGetSettingByKeySelector = (stateKey) => makeSelectorUsingStateKey(stateKey, getSettingsByKeySelector);