import React, { use } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signInUser} = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        
        signInUser(email, pass)
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
            
        })

    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-bold text-4xl text-center mt-4'>Log in</h2>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='pass' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='text-center'>Dont’t Have An Account ? <Link to="/auth/register" className='text-secondary hover:underline'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;