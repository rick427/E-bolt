import React, { Component } from 'react';
import './login.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        // const {name, value} = e.target;
        // this.setState({[name]: value});
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
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
                       value={this.state.email} 
                       required 
                    />
                    <FormInput 
                       type="password" 
                       name="password" 
                       label="password"
                       handleChange={this.handleChange} 
                       value={this.state.password} 
                       required 
                    />
                    <Button type="submit">SignIn</Button>
                </form>
            </div>
        )
    }
}

export default Login;
