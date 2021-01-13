import React, { useState } from 'react';

import Signin from './Signin/Signin';
import Signup from './Signup/Signup';


const Auth = () => {

    const [isSignin, setIsSignin] = useState(true);

    const toggleView = () => {
        setIsSignin(!isSignin);
    }

    return (
        <div className="auth-field">
            {isSignin ? <Signin /> : <Signup /> }
            <p onClick={toggleView}>{isSignin ? "Havn't account yet? Signup" : "Already have an account? Signin"}</p>
        </div>
    );
};

export default Auth;