import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner';

const Spinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}

export default Spinner
