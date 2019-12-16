import React from 'react';

const CustomeButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    const inverted = otherProps.inverted ? 'inverted' : '';

    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted}`} {...otherProps}>{children}</button>
    );
};

export default CustomeButton;