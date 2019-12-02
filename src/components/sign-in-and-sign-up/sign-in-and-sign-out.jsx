import React from 'react';

import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
    
};

export default SignInAndSignUp;