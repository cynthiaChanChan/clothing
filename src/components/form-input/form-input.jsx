import React from 'react';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? 
                <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}>{label}</label>
                : null
            }     
        </div>
    );
};

export default FormInput;