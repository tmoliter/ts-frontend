export const makeSelectorUsingStateKey = (stateKey, selector) => {
    return (state, props) => {
        return selector(state[stateKey], props);
    };
};