import React from 'react';
import PropTypes from 'prop-types';

const styleFunc = (color, radius) => ({
    width: "200px",
    height: "200px",
    background: color,
    cursor: "pointer",
    borderRadius: radius,
    border: "none"
});

const SimonButton = ({color, radius, clickFunc}) => (
    <button style={styleFunc(color, radius)} onClick={clickFunc}/>
);

SimonButton.propTypes = {
    color: PropTypes.string,
    clickFunc: PropTypes.func,
    radius: PropTypes.string,
};

export default SimonButton;