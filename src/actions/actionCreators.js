import { HIGHLIGHT, CHANGE_STATUS, ADD_TO_CHOICE, ADD_TO_PATTERN, INCREMENT_COUNT, RESET_COUNT } from './actions';

export const createHighlight = (color) => ({
    type: HIGHLIGHT,
    color,
});

export const createChangeStatus = () => ({
    type: CHANGE_STATUS
});

export const createAddToChoice = (color) => ({
    type: ADD_TO_CHOICE,
    color,
});

export const createAddToPattern = (color) => ({
    type: ADD_TO_PATTERN,
    color,
});

export const createIncrementCount = () => ({
    type: INCREMENT_COUNT
});

export const createResetCount = () => ({
    type: RESET_COUNT
});

export const ayncCompShoe = () => (dispatch, getState) => {
    const {count} = getState();

    if()
};