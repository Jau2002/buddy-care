import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { Type } from '../components/components';
import { getUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import { LogInAction } from '../features/reducers';
import prevSubmit from '../utils/prevSubmit';
import type { Auth, dispatcherUser, Location, Submit } from './hook';
import useCleaning from './useCleaning';

function useAuthenticated(): Auth {
	const { getIsALogged } = useCleaning();

	const dispatch: dispatcherUser = useAppDispatch();

	const { pathname } = useLocation() as Location;

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const navigate: NavigateFunction = useNavigate();

	const handleSubmit: Submit = ({ email, password }: Type) => {
		getIsALogged()
			? logger.map(({ password, email, id, nombres }: LogInAction) => {
					localStorage.setItem('nombres', nombres);
					localStorage.setItem('id', id.toString());
					localStorage.setItem('email', email);
					localStorage.setItem('password', password);
					return navigate('/');
			  })
			: dispatch(getUser(prevSubmit({ email, password })));
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
		code: '',
	};

	return { handleSubmit, defaultInputs, pathname };
}

export default useAuthenticated;
