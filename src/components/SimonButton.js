import React from 'react';
import PropTypes from 'prop-types';

const styleFunc = (color) => ({
    width: "50px",
    height: "50px",
    background: color
});

const SimonButton = ({color, func}) => (
    <button style={styleFunc(color)} onClick={func}/>
);

SimonButton.propTypes = {
    color: PropTypes.string,
    func: PropTypes.func,
};

export default SimonButton;