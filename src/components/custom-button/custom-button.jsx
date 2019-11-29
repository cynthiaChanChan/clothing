import React from 'react';

const customeButton = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>{children}</button>
    );
};

export default customeButton;