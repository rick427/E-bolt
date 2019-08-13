import React from 'react';
import {CustomButtonContainer} from './button.styles'
//import './button.scss';

const Button = ({children, ...props}) => {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default Button;
