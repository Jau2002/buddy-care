import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App(): ReactElement {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <NotFound />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
