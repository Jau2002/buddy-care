import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type { Navigate } from '../utils/utils';
import type { LinkRoutes } from './components';

function Nav({ link }: LinkRoutes): ReactElement {
	return (
		<nav
			className='navbar bg-dark'
			data-bs-theme='dark'
		>
			<div className='container-fluid'>
				{link.map(
					({ route, url }: Navigate, i: number): ReactElement => (
						<Link
							key={i}
							to={url}
							className='navbar-brand'
						>
							<samp className='nav-link text-white nav'>{route}</samp>
						</Link>
					)
				)}
			</div>
		</nav>
	);
}

export default Nav;
