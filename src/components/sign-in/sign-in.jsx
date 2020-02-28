import React, { useState } from 'react';

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoolge } from "../../firebase/firebase.utils";

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: ''});

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            
            setUserCredentials({ 
                email: '',
                password: ''
            });
        } catch(error) {
            alert(error.message);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2 className="title">Sign In</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput 
                    handleChange = {handleChange}
                    type="email" 
                    name="email"
                    label="email" 
                    required 
                    value={email} 
                />
                <FormInput 
                    handleChange = {handleChange}
                    type="password" 
                    name="password"
                    label="password"
                    required 
                    value={password} 
                />
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
            <CustomButton isGoogleSignIn onClick={signInWithGoolge}>Sign In With Google</CustomButton>
        </div>
    );

};

export default SignIn;