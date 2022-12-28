import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { Type } from '../components/components';
import { getUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import { LogInAction } from '../features/reducers';
import prevSubmit from '../utils/prevSubmit';
import type { Auth, Location, Submit } from './hook';

function authenticating(): Auth {
	const dispatch = useAppDispatch();

	const { pathname } = useLocation() as Location;

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const navigate: NavigateFunction = useNavigate();

	const handleSubmit: Submit = (values: Type) => {
		logger.length
			? setTimeout(() => {
					navigate('/');
			  }, 2000)
			: dispatch(getUser(prevSubmit(values)));
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
		code: '',
	};

	return { handleSubmit, defaultInputs, pathname };
}

export default authenticating;
