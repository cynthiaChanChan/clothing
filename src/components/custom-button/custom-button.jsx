import React from 'react';

const customeButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    const className = `custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`;
    return (
        <button className={className} {...otherProps}>{children}</button>
    );
};

export default customeButton;