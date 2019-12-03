import React from 'react';

const customeButton = ({ children, ...otherProps }) => {
    const isGoogleSignIn = otherProps.isGoogleSignIn ? 'google-sign-in' : '';
    const inverted = otherProps.inverted ? 'inverted' : '';

    return (
        <button className={`custom-button ${isGoogleSignIn} ${inverted}`} {...otherProps}>{children}</button>
    );
};

export default customeButton;