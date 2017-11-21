import initalState from './initialState';
import { INCREMENT_INDEX, INCREMENT_PATTERN, END_GAME, START_GAME, HIGHLIGHT, END_SHOW} from '../actions/actions';

const mainReducer = (state = initalState(), action) => {
    switch(action.type){
        case HIGHLIGHT:
            return {
                ...state,
                highlighted: {
                    c1: false,
                    c2: false,
                    c3: false,
                    c4: false,
                    [action.id]: true,
                },
                patIndex: state.patIndex + 1,
            };

        case END_SHOW:
            return {
                ...state,
                highlighted: {
                    c1: false,
                    c2: false,
                    c3: false,
                    c4: false,
                },
                inProgress: false,
                patIndex: 0,
            };

        case START_GAME:
            return {
                ...state,
                isPlaying: !(state.isPlaying)
            };

        case END_GAME:
            return {
                ...state,
                isPlaying: !(state.isPlaying)
            };

        case INCREMENT_PATTERN:
            return {
                ...state,
                index: 0,
                patIndex: 0,
                pattern: [ ...state.pattern, Math.floor( Math.random() * 4)],
                inProgress: true,
            };

        case INCREMENT_INDEX:
            return {
                ...state,
                index: state.index + 1
            };
        
        default:
            return state;
    }
};

export default mainReducer;