import React from 'react';
import { createContext } from 'react';
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import auth from '../firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };
    const authStore = {
        user,
        loading,
        handleGoogleSignIn,
        handleSignOut,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            console.log('i am observing ...', loggedInUser);
            setUser(loggedInUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <AuthContext.Provider value={authStore}>
            {children}
        </AuthContext.Provider>
    );
}
