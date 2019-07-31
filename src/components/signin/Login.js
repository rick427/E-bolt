import React, { Component } from 'react';
import './login.scss';

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
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required />
                    <label>Email</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required />
                    <label>Password</label>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default Login;
