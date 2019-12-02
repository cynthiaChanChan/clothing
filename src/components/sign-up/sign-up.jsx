import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        conformPassword: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, displayName, conformPassword } = this.state;
        if (password !== conformPassword ) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
    
            this.setState({
                displayName: '',
                email: '',
                password: '',
                conformPassword: ''
            })
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, displayName, password, conformPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        name="displayName" 
                        type="text" 
                        label="Display Name" 
                        value={displayName}  
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="Email" 
                        value={email} 
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password" 
                        type="password" 
                        label="Password" 
                        value={password} 
                        handleChange={this.handleChange} 
                    />
                    <FormInput
                        name="conformPassword" 
                        type="password" 
                        label="Conform Password" 
                        value={conformPassword} 
                        handleChange={this.handleChange} 
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;