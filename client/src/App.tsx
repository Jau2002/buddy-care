import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const App = (): ReactElement => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
