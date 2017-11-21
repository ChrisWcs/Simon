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

export const createHighlight = (id) => ({
    type: HIGHLIGHT,
    id, 
});

export const createEndShow = () => ({
    type: END_SHOW
});

export const asyncCompShow = () => (dispatch, getState) => {
    const arr = ["c1", "c2", "c3", "c4"];

    const id = setInterval( () => {
        dispatch( createHighlight(arr[getState().patIndex]) ); // -------------        
        console.log("From comp");

        if(getState().patIndex === getState().pattern.length){    
            clearInterval(id);
            
            setTimeout( () => {
                dispatch(createEndShow());
            }, 1000);
        }
    }, 1000);
};

export const createAsyncClick = (cNum) => (dispatch, getState) => {
    const {index, pattern} = getState();

    if( cNum === pattern[index] && index === pattern.length ){
        dispatch(createIncrementIndex()); // -------------

    } else if ( index === pattern.length - 1 && cNum === pattern[index] ){
        dispatch(createIncrementPattern()); // -------------        
        setTimeout( () => {
            console.log("from async click");
            dispatch(asyncCompShow());
        }, 2000);

    } else {
        dispatch(createEndGame()); // -------------        
    }
};