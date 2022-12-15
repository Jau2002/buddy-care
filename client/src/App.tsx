import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import Pass from './pages/Pass';
import Usr from './pages/Usr';

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
			path: '/logIn/usr',
			element: <Usr />,
		},
		{
			path: '/logIn/pass',
			element: <Pass />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
