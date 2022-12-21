import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import PasswordRecovery from './pages/PasswordRecovery';
import UserValidate from './pages/UserValidate';

function App(): ReactElement {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <NotFound />,
		},
		{
			path: '/logIn',
			element: <LogIn />,
		},
		{
			path: '/logIn/user',
			element: <UserValidate />,
		},
		{
			path: '/logIn/password',
			element: <PasswordRecovery />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
