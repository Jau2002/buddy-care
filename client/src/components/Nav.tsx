import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import type { LinkRoutes, Navigate, useNavLink } from '../vite-env';

function Nav({ link }: LinkRoutes): ReactElement {
	const active = 'underline';
	return (
		<nav>
			{link.map(
				({ id, route, url }: Navigate): ReactElement => (
					<NavLink
						key={id}
						to={url}
					>
						{({ isActive }: useNavLink): ReactElement => (
							<samp className={isActive ? active : undefined}>{route}</samp>
						)}
					</NavLink>
				)
			)}
		</nav>
	);
}

export default Nav;
