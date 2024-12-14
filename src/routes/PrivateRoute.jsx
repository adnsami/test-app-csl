import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';
export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return 'Loading ...';
    }

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
}
