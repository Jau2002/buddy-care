import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardPets from './components/CardPets';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import PasswordRecovery from './pages/PasswordRecovery';
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
			path: '/SignIn',
			element: <LogIn />,
		},
		{
			path: '/SignIn/user',
			element: <UserValidate />,
		},
		{
			path: '/SignIn/password',
			element: <PasswordRecovery />,
		},
		{
			path: '/pets',
			element: <CardPets />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
