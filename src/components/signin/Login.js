import React, { Component } from 'react';
import {auth, signInwWithGoogle} from '../../firebase/firebase.utils';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';
import './login.scss';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '', 
                password: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Login with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                       type="email" 
                       name="email" 
                       label="email"
                       handleChange={this.handleChange} 
                       value={email} 
                       required 
                    />
                    <FormInput 
                       type="password" 
                       name="password" 
                       label="password"
                       handleChange={this.handleChange} 
                       value={password} 
                       required 
                    />
                    <div className="buttons">
                        <Button type="submit">SignIn</Button>
                        <Button onClick={signInwWithGoogle} isGoogleSignin>Login with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
