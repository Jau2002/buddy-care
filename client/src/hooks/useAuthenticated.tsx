import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { Type } from '../components/components';
import { getUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import { LogInAction } from '../features/reducers';
import prevSubmit from '../utils/prevSubmit';
import type { Auth, dispatcherUser, Location, Submit } from './hook';

function useAuthenticated(): Auth {
	const dispatch: dispatcherUser = useAppDispatch();

	const { pathname } = useLocation() as Location;

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const navigate: NavigateFunction = useNavigate();

	const handleSubmit: Submit = (values: Type) => {
		dispatch(getUser(prevSubmit(values)));
		logger.length
			? logger.map(({ nombres, email }: LogInAction) => {
					localStorage.setItem('email', email);
					localStorage.setItem('nombres', nombres);
					return navigate('/');
			  })
			: dispatch(getUser(prevSubmit(values)));
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
		code: '',
	};

	return { handleSubmit, defaultInputs, pathname };
}

export default useAuthenticated;
