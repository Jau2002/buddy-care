import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { Type } from '../components/components';
import { getUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import { LogInAction } from '../features/reducers';
import type { Auth, Location, Submit } from './hook';

function authenticating(): Auth {
	const dispatch = useAppDispatch();

	const { pathname } = useLocation() as Location;

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const navigate: NavigateFunction = useNavigate();

	const handleSubmit: Submit = ({ email, password }: Type) => {
		const query = {
			myQuery: `SELECT email, password, apellido, nombres, id FROM pfvet_clientes WHERE TRIM(email)='${email?.trim()}' AND TRIM(password)='${password?.trim()}' LIMIT 1;`,
		};
		dispatch(getUser(query));
		console.log(logger);
		logger.length
			? setTimeout(() => {
					navigate('/');
			  }, 2000)
			: navigate('/');
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
		code: '',
	};

	return { handleSubmit, defaultInputs, pathname };
}

export default authenticating;
