import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import SignIn from './SignIn';
import Profile from './Profile';
import PrivateRoute from './routes/PrivateRoute';
import CleanUp from './CleanUp';
import Products from './Products';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/signin',
                Component: SignIn,
            },
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: '/products',
                element: (
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                ),
            },
            {
                path: '/cleanup',
                Component: CleanUp,
            },
        ],
    },
]);

export default router;
