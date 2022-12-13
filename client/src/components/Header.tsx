import { ReactElement } from 'react';
import { navigation } from '../utils/routes';
import Nav from './Nav';

function Header(): ReactElement {
	return (
		<>
			<Nav link={navigation} />
		</>
	);
}

export default Header;
