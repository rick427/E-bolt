import React, { Component } from 'react';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './register.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';

class Register extends Component {
    constructor(){
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                       type="text" 
                       name="displayName" 
                       onChange={this.handleChange}
                       value={displayName}
                       label="Display Name"
                       required
                    />
                     <FormInput
                       type="email" 
                       name="email" 
                       onChange={this.handleChange}
                       value={email}
                       label="Email"
                       required
                    />
                     <FormInput
                       type="password" 
                       name="password" 
                       onChange={this.handleChange}
                       value={password}
                       label="Password"
                       required
                    />
                     <FormInput
                       type="password" 
                       name="confirmPassword" 
                       onChange={this.handleChange}
                       value={confirmPassword}
                       label="Confirm Password"
                       required
                    />
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default Register
