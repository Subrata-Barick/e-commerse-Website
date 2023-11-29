import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext=createContext();
const auth=getAuth();
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    //create user 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    //create user using gmail
    const signUpWithGmail=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    //login
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }
    //logout function
    const logout=()=>{
        return signOut(auth);
    }
    //user is available or not 
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    })
    const authinfo={
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={authinfo}>
{children}
    </AuthContext.Provider>
  )
}

export default AuthProvider