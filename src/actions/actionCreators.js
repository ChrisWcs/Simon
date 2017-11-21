import { INCREMENT_INDEX, END_GAME, START_GAME, INCREMENT_PATTERN, HIGHLIGHT, END_SHOW } from './actions';

export const createIncrementIndex = () => ({
    type: INCREMENT_INDEX,
});

export const createIncrementPattern = () => ({
    type: INCREMENT_PATTERN,
});

export const createEndGame = () => ({
    type: END_GAME,
});

export const createStart = () => ({
    type: START_GAME
});

export const createHighlight = () => ({
    type: HIGHLIGHT
});

export const createEndShow = () => ({
    type: END_SHOW
});

export const asyncCompShow = () => (dispatch, getState) => {
    const id = setInterval( () => {
        dispatch(createHighlight()); // -------------        

        if(getState().patIndex === getState().pattern.length){
            clearInterval(id);
            
            setTimeout( () => {
                dispatch(END_SHOW)
            }, 1000);
        }
    }, 1000);

    return {
        type: ""
    };
};

export const createAsyncClick = (cNum) => (dispatch, getState) => {
    const {index, pattern} = getState();

    if( cNum === pattern[index] && index === pattern.length ){
        dispatch(createIncrementIndex()); // -------------

    } else if ( index === pattern.length - 1 && cNum === pattern[index] ){
        dispatch(createIncrementPattern()); // -------------        
        setTimeout( () => {
            dispatch(asyncCompShow());
        }, 2000);

    } else {
        dispatch(createEndGame()); // -------------        
    }

    return {
        type: ""
    };
};