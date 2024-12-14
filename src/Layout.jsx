import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router';
import { AuthContext } from './provider/AuthProvider';

export default function Layout() {
    const { handleSignOut, user } = useContext(AuthContext);

    return (
        <div>
            <header>
                <nav className="nav">
                    <NavLink to="/">Home</NavLink>

                    {user ? (
                        <>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </>
                    ) : (
                        <NavLink to="/signin">Sign In</NavLink>
                    )}
                </nav>
            </header>
            <Outlet />
            <footer>Footer</footer>
        </div>
    );
}
