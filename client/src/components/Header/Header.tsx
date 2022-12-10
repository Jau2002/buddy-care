import { ReactElement } from 'react';
import logo from '../../assets/img/logo_negro.png';
import Login from '../Login/Login';

const Header = (): ReactElement => {
	return (
		<div className='navbar navbar-dark bg-dark'>
			<h1>Tienda Online</h1>
			<h1>Turnos y Consultas</h1>
			<h1>Servicios</h1>
			<Login />
			<img
				src={logo}
				alt='logo'
			/>
		</div>
	);
};

export default Header;
