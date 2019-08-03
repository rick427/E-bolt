import React from 'react';
import './button.scss';

const Button = ({children, isGoogleSignin, inverted, ...otherProps}) => {
    return (
        <button 
            className={`${inverted ? 'inverted': ''} 
                        ${isGoogleSignin ? 'google-sign-in': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
