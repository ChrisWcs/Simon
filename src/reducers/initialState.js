const initialState = () => ({
    choice: [],
    pattern: [],
    inProgress: false,
    highlighted: {
        r: false,
        g: false,
        b: false,
        y: false,
    },
    highCount: 0,
});

export default initialState;