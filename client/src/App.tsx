import type { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardPets from './components/CardPets';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import PasswordRecovery from './pages/PasswordRecovery';
import SingUp from './pages/SingUp';
import UserValidate from './pages/UserValidate';

function App(): ReactElement {
	const router = createBrowserRouter([
		{
			path: '/',
			index: true,
			element: <Home />,
			errorElement: <NotFound />,
		},
		{
			path: '/signIn',
			element: <LogIn />,
		},
		{
			path: '/signIn/user',
			element: <UserValidate />,
		},
		{
			path: '/signIn/password',
			element: <PasswordRecovery />,
		},
		{
			path: '/pets',
			element: <CardPets />,
		},
		{
			path: '/signUp',
			element: <SingUp />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
