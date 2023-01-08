import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import PasswordRecovery from './pages/PasswordRecovery';
import Pets from './pages/Pets';
import Shop from './pages/Shop';
import SingUp from './pages/SingUp';
import UserValidate from './pages/UserValidate';

function App(): ReactElement {
	return (
		<Routes>
			<Route
				path='/'
				index
				element={<Home />}
				errorElement={<NotFound />}
			/>
			<Route
				path='/signIn'
				element={<LogIn />}
			/>
			<Route
				path='/signIn/user'
				element={<UserValidate />}
			/>
			<Route
				path='/signIn/password'
				element={<PasswordRecovery />}
			/>
			<Route
				path='/pets'
				element={<Pets />}
			/>
			<Route
				path='/pet/:id'
				element={<Pets />}
			/>
			<Route
				path='/signUp'
				element={<SingUp />}
			/>
			<Route
				path='/shop'
				element={<Shop />}
			/>
			<Route
				path='/account'
				element={<Account />}
			/>
		</Routes>
	);
}

export default App;
