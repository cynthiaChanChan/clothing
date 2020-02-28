import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        conformPassword: ''
    });

    const { email, password, displayName, conformPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== conformPassword ) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
    
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                conformPassword: ''
            })
        } catch (error) {
            alert(error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }
    
    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    name="displayName" 
                    type="text" 
                    label="Display Name" 
                    value={displayName}  
                    handleChange={handleChange}
                />
                <FormInput 
                    name="email" 
                    type="email" 
                    label="Email" 
                    value={email} 
                    handleChange={handleChange}
                />
                <FormInput
                    name="password" 
                    type="password" 
                    label="Password" 
                    value={password} 
                    handleChange={handleChange} 
                />
                <FormInput
                    name="conformPassword" 
                    type="password" 
                    label="Conform Password" 
                    value={conformPassword} 
                    handleChange={handleChange} 
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
    
}

export default SignUp;