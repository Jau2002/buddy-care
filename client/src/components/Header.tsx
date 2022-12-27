import { ReactElement } from 'react';
import { navigation } from '../utils/routes';
import Nav from './Nav';

function Header(): ReactElement {
	return (
		<header className='navbar navbar-expand-lg navbar-light bg-dark'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse'>
					<div className='navbar-brand mt-2 mt-lg-0'>
						<img
							src='/img/logo-blanco.png'
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
				</div>
			</div>
		</header>
	);
}

export default Header;
