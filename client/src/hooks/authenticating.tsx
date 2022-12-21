import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../app/hook';
import type { Type } from '../components/components';
import { getUser } from '../features/logger/logInActions';
import type { Auth, Submit } from './hook';

function authenticating(): Auth {
	const dispatch = useAppDispatch();

	const { pathname } = useLocation();

	const handleSubmit: Submit = (values: Type) => {
		const query = {
			myQuery: `select email, password, apellido, nombres, id from pfvet_clientes WHERE trim(email)='${values.email?.trim()}' and trim(password)='${values.password?.trim()}' limit 1 ;`,
		};
		dispatch(getUser(query));
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
		code: '',
	};

	return { handleSubmit, defaultInputs, pathname };
}

export default authenticating;
