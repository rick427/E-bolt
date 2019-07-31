import React from 'react';
import './button.scss';

const Button = ({children, isGoogleSignin, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignin ? 'google-sign-in': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
