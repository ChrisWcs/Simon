import React from 'react';
import PropTypes from 'prop-types';

const style = {
    row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    column: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
}

const Game = () => (
    <div style={style.column}>
        <div style={style.row}></div>
        <div style={style.row}></div>
        <div style={style.row}></div>
    </div>
);

export default Game;