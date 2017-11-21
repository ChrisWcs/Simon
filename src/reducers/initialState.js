const initialState = () => ({
    pattern: [ 0,],
    inProgress: false,
    isPlaying: false,
    highlighted: {
        c1: false,
        c2: false,
        c3: false,
        c4: false,
    },
    index: 0,
    patIndex: 0,
});

export default initialState;