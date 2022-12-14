import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';

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
	]);
	return <RouterProvider router={router} />;
}

export default App;
