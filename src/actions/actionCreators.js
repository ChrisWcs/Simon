import { HIGHLIGHT, CHANGE_STATUS, ADD_TO_CHOICE, ADD_TO_PATTERN, INCREMENT_COUNT, RESET_COUNT } from './actions';

export const createHighlight = (color) => ({
    type: HIGHLIGHT,
    color,
});

export const createChangeStatus = () => ({
    type: CHANGE_STATUS
});

export const createAddToChoice = (cNum) => ({
    type: ADD_TO_CHOICE,
    cNum,
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

export const ayncCompShow = () => (dispatch, getState) => {
    const { highCount, pattern } = getState();

    if( highCount === pattern.length) {

        setTimeout( () => {
            
        }, 1000);

        dispatch(createResetCount());
    } else {
        dispatch();
        dispatch(createIncrementCount());
    }
};