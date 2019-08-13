import React, { useState } from 'react';
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';
import './login.scss';

const Login = ({googleSignInStart, emailSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials
    
    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const {value, name} = e.target;
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Login with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    label="email"
                    handleChange={handleChange} 
                    value={email} 
                    required 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    label="password"
                    handleChange={handleChange} 
                    value={password} 
                    required 
                />
                <div className="buttons">
                    <Button type="submit">SignIn</Button>
                    <Button 
                        type="button" 
                        onClick={googleSignInStart} 
                        isGoogleSignin
                    >
                        Login with Google
                    </Button>
                </div>
            </form>
        </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null ,mapDispatchToProps)(Login);
