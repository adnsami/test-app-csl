import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

export default function SignIn() {
    const { handleGoogleSignIn } = useContext(AuthContext);

    return (
        <div>
            <h2>SignIn</h2>
            <div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
}
