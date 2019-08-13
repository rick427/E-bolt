import React from 'react';
import Login from '../../components/signin/Login';
import Register from '../../components/signup/Register';
import './auth.scss';

const Auth = () => {
    return (
        <div className="auth">
           <Login/>
           <Register/>
        </div>
    )
}

export default Auth;
