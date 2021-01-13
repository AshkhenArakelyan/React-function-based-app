import React, {useState} from 'react';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import './Signup.css';
import { validateSignup } from '../../../utils/validate';

const Signup = (props) => {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState(null);

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const validateErrors = validateSignup(inputs)

        if(validateErrors) {
            setErrors(validateErrors);
        }else {         
            setErrors(null);
        }
    }

    return (
        <div className="signup-wrapper">
            <h3>SignUp</h3>
            <form className="signup-form" onSubmit={handleFormSubmit}>
                <Input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={inputs.username}
                    onChange={handleChangeInput}
                />
                <Input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={inputs.email}
                    onChange={handleChangeInput}
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={inputs.password}
                    onChange={handleChangeInput}
                />
                <Button>
                    Sign up
                </Button>
                {errors ? <p className="error-message"> {errors}  </p>  : null }
            </form>
        </div>
    );
};

export default Signup;