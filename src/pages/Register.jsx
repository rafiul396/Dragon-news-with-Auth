import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-bold text-4xl text-center mt-4'>Register</h2>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="email" className="input" placeholder="Write your name" />
                    <label className="label">Photo URL</label>
                    <input type="email" className="input" placeholder="Paste your photo URL" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p className='text-center'>Already Have An Account ? <Link to="/auth/login" className='text-secondary hover:underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;