import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

const App = (): ReactElement => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '*',
			element: <Error />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
