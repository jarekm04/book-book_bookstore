import {useState} from 'react';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { handleChange, errorMessage, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="form__inputArea">
            <input
                {...inputProps}
                onChange={handleChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;