import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigete } from 'react-router-dom';
import './SignUp.css'
import auth from '../../firebase.init'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigete = (useNavigete)

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordlBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigete('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('You two password did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer ');
            return;
        }
        createUserWithEmailAndPassword(email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user)
        // })
    }

    return (
        <div className='form-signup-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password"> Confirm Password</label>
                        <input onBlur={handleConfirmPasswordlBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='border'>
                    <div className='margin'>
                        <hr />
                    </div>
                    <div>
                        <p className='or'>Or</p>
                    </div>
                    <div className='margin'>
                        <hr />
                    </div>
                </div>
                <Link className='form-google' to=""> <img className='img' src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo.png" alt="" /> Continue with Google</Link>
            </div>
        </div>
    );
};

export default SignUp;