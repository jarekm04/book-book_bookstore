import React from 'react';

const FormInput = (props) => {
    const { handleChange, id, errorMessage ...inputProps } = props;

    return (
        <div className="form__input">
            <input {...inputProps} onChange={handleChange} />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;