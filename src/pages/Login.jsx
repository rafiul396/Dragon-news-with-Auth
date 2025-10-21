import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-bold text-4xl text-center mt-4'>Log in</h2>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p className='text-center'>Dont’t Have An Account ? <Link to="/auth/register" className='text-secondary hover:underline'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;