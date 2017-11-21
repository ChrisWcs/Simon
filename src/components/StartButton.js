import React from 'react';
import PropTypes from 'prop-types';

const style = {
    border: "none",
    width: 100,
    height: 50,
    fontFamily: "Arial",
    fontSize: "25px",
    cursor: "pointer",
    marginTop: "10px",
};

const StartButton = ({startFunc}) => (
    <button style={style} onClick={startFunc}> Start </button>
);

StartButton.propTypes = {
    startFunc: PropTypes.func
};

export default StartButton;