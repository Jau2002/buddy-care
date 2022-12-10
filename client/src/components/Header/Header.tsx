import { ReactElement } from 'react';
import logo from '../../resources/logo_negro.png';

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
