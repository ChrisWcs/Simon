import React from 'react';
import PropTypes from 'prop-types';

import ConSimon from '../containers/ConSimon';
import ConStart from '../containers/ConStart';

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
};

const Game = () => (
    <div style={style.column}>
        <div style={style.row}>
            <ConSimon high={"#B71C1C"} norm={"#FF5252"} cNum={0} radius={"100px 0px 0px 0px"}/>
            <ConSimon high={"#0D47A1"} norm={"#448AFF"} cNum={1} radius={"0px 100px 0px 0px"}/>
        </div>
        <div style={style.row}>
            <ConSimon high={"#4A148C"} norm={"#E040FB"} cNum={3} radius={"0px 0px 0px 100px"}/>
            <ConSimon high={"#1B5E20"} norm={"#69F0AE"} cNum={2} radius={"0px 0px 100px 0px"}/>
        </div>
        <div style={style.row}>
            <ConStart/>
        </div>
    </div>
);

export default Game;