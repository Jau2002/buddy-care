import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type { LogInAction } from '../features/logger/logger';
import useAuthenticated from '../hooks/useAuthenticated';
import useCleaning from '../hooks/useCleaning';
import { navigation } from '../utils/routes';
import Nav from './Nav';

function Header(): ReactElement {
	const { handleClick, logger } = useCleaning();
	const { useIsLogged } = useAuthenticated();
	return (
		<header className='navbar navbar-expand-lg navbar-light bg-dark'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse'>
					<div className='navbar-brand mt-2 mt-lg-0'>
						<img
							src='/img/logo-white.png'
							width='40px'
							height='30px'
							alt='Logo'
							loading='lazy'
						/>
					</div>
					<Nav link={navigation} />
				</div>
				<div className='d-flex align-items-center'>
					<a
						className='text-reset me-3'
						href='#'
					>
						<img
							src='/img/cart-check-fill.svg'
							alt='Carrito de compras'
							loading='lazy'
						/>
					</a>
					{useIsLogged() ? (
						<div className='d-flex align-items-center'>
							<button
								type='button'
								onClick={handleClick}
								className='btn btn-outline-light nav--button'
							>
								Cerrar Sección
							</button>
							{logger.length ? (
								logger.map(
									({ nombres }: LogInAction, i: number): ReactElement => (
										<h3
											className='nav--h3'
											key={i}
										>
											{nombres}
										</h3>
									)
								)
							) : (
								<h3 className='nav--h3'>{localStorage.getItem('nombres')}</h3>
							)}
						</div>
					) : (
						<Link
							to='/signIn/'
							className='navbar-brand'
						>
							<span className='nav-link text-white nav'>Registrarse</span>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
