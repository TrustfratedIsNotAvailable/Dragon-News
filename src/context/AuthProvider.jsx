import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthProvider = ({children}) => {
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithProvider=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    const info ={
        createUser,
        login,
        signInWithProvider,
        logOut,
        resetPassword
    }

    return (
        <AuthContext value={info} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;