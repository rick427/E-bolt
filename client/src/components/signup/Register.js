import React, { useState } from 'react';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user-actions';
import './register.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';

const Register = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {email, displayName,password, confirmPassword} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }    

        signUpStart({displayName, email, password})
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setUserCredentials({...userCredentials, [name]: value})
    };

  
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text" 
                    name="displayName" 
                    onChange={handleChange}
                    value={displayName}
                    label="Display Name"
                    required
                />
                    <FormInput
                    type="email" 
                    name="email" 
                    onChange={handleChange}
                    value={email}
                    label="Email"
                    required
                />
                    <FormInput
                    type="password" 
                    name="password" 
                    onChange={handleChange}
                    value={password}
                    label="Password"
                    required
                />
                    <FormInput
                    type="password" 
                    name="confirmPassword" 
                    onChange={handleChange}
                    value={confirmPassword}
                    label="Confirm Password"
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Register)
