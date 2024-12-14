import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Navigate } from 'react-router';

export default function Profile() {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>Profile</h2>

            <div>
                {user && (
                    <img src={user.photoURL} alt="" width={250} height={250} />
                )}

                <p>{user.displayName}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
}
