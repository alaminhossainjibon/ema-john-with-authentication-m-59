import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { google } from '@fortawesome/free-solid-svg-icons';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Creat an account</Link>
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

export default Login;