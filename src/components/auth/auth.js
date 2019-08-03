import React from 'react';
import Login from '../signin/Login';
import './auth.scss';
import Register from '../signup/Register';

const Auth = () => {
    return (
        <div className="auth">
           <Login/>
           <Register/>
        </div>
    )
}

export default Auth;
