import React from 'react';
import Main from '../components/Main/Main';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <Navigate to='/news/1'></Navigate>
        // <h1>Hello Home</h1>
    );
};

export default Home;