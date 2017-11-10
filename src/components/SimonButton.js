import React from 'react';
import PropTypes from 'prop-types';

const styleFunc = (highColor, unColor) => ({
    width: "100px",
    height: "100px",
    background: color
});

const SimonButton = ({highColor, unColor, func}) => (
    <button style={styleFunc(highColor, unColor )} onClick={func}/>
);

SimonButton.propTypes = {
    color: PropTypes.string,
    func: PropTypes.func,
};

export default SimonButton;