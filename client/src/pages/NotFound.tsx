import { ReactElement } from 'react';
import { useRouteError } from 'react-router-dom';
import GoToHome from '../components/GoToHome';
import type { RouteError } from './pages';

function NotFound(): ReactElement {
	const { status, statusText } = useRouteError() as RouteError;
	return (
		<main>
			<h2>{status}</h2>
			<p>{statusText}</p>
			<h3>The page you´re looking for does not exist</h3>
			<GoToHome />
		</main>
	);
}

export default NotFound;
