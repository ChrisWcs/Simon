import initalState from './initialState';

const mainReducer = (state = initalState(), action) => {
    switch(action.type){
        
        default:
            return state;
    }
};

export default mainReducer;