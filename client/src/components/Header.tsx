import { ReactElement } from 'react';
// import { Link } from 'react-router-dom';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo_blanco.png';
// import Login from '../Login/Login';

/* // <div className='navbar navbar-dark bg-dark'>
 	<h1>Tienda Online</h1>
 	<h1>Turnos y Consultas</h1>
 	<h1>Servicios</h1>
 	<Login />
 	<img
 		src={logo}
 		alt='logo'
 	/>
</div> */
const Header = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<>
			<nav className='navbar navbar-dark bg-primary'>
				<div className='container-fluid'>
					<img
						src={logo}
						alt='Bootstrap'
						className='.navbar-brand'
						// height='100'
						width='150'
						onClick={() => navigate('/')}
					/>
				</div>
			</nav>
		</>
	);
};

export default Header;
