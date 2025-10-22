import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firbase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signInUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubs = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        })
        return () => {
            unsubs()
        }
    })


    console.log(user);
    

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logout
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;