import { ReactElement } from 'react';
import logo from '../assets/img/logo_negro.png';

const Header = (): ReactElement => {
	return (
		<div>
			<img
				src={logo}
				alt='logo'
			/>
		</div>
	);
};

export default Header;
