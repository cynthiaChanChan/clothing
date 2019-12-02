import React from 'react';

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoolge } from "../../firebase/firebase.utils";

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            console.log(user);
            this.setState({ 
                email: '',
                password: ''
            });
        } catch(error) {
            alert(error.message);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">Sign In</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        handleChange = {this.handleChange}
                        type="email" 
                        name="email"
                        label="email" 
                        required 
                        value={this.state.email} 
                    />
                    <FormInput 
                        handleChange = {this.handleChange}
                        type="password" 
                        name="password"
                        label="password"
                        required 
                        value={this.state.password} 
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
                <CustomButton isGoogleSignIn onClick={signInWithGoolge}>Sign In With Google</CustomButton>
            </div>
        );
    }

};

export default SignIn;