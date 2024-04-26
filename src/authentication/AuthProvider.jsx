/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)
    // create user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,  password)
    }
    // password Login'
    const passwordLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // github Login
	const githubProvider = new GithubAuthProvider()
	const githubLogin = ()=>{
		return signInWithPopup(auth, githubProvider)
	}
    // log Out
    const logOut = ()=>{
        setUser(null)
        return signOut(auth)
    }
    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            return unsubscribe()
        })}, [])
    
    const authInfo = {
        auth,
        createUser,
        passwordLogin,
        googleLogin,
        githubLogin,
        user,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;