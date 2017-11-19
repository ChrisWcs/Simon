import React from 'react';
import PropTypes from 'prop-types';

const style = {

};

const StartButton = ({startFunc}) => (
    <button style={style} onClick={startFunc}> Start </button>
);

StartButton.propTypes = {
    startFunc: PropTypes.func
};

export default StartButton;