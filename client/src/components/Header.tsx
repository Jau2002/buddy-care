import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LogInAction } from '../features/reducers';
import useCleaning from '../hooks/useCleaning';
import { navigation } from '../utils/routes';
import Nav from './Nav';

function Header(): ReactElement {
	const { logger, handleClick } = useCleaning();
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
					{logger?.length ? (
						logger.map(
							({ nombres, apellido }: LogInAction, i: number): ReactElement => (
								<div
									key={i}
									className='d-flex align-items-center'
								>
									<button
										type='button'
										onClick={handleClick}
										className='btn btn-outline-light nav--button'
									>
										Cerrar Sección
									</button>
									<h3 className='nav--h3'>{nombres}</h3>
								</div>
							)
						)
					) : (
						<Link
							to='/SignIn/'
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
