import React, {useState} from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './Signin.css';
import { validateSignin } from '../../../utils/validate';

const Signin = (props) => {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState(null);

    const handleChangeInput = (event) => {
        console.log(event.target.name)
        const name = event.target.name;
        const value = event.target.value;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const validateErrors = validateSignin(inputs)

        if(validateErrors) {
            setErrors(validateErrors);
        }else {         
            setErrors(null);
        }
    }

    return (
        <div className="signin-wrapper">
            <h3>SignIn</h3>
            <form className="signin-form" onSubmit={handleFormSubmit}>
                <Input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={inputs.username}
                    onChange={handleChangeInput}
                    
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={inputs.password}
                    onChange={handleChangeInput}
                />
                <Button>Sign in</Button>
                {errors ? <p className="error-message"> {errors}  </p>  : null }
            </form>
        </div>
    );
};

export default Signin;