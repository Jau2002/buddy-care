import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { Type } from '../components/components';
import type { LogInAction } from '../features/logger/logger';
import { getUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import prevSubmit from '../utils/prevSubmit';
import type {
	Auth,
	dispatcherUser,
	LocalStorage,
	Location,
	Submit,
} from './hook';

function useAuthenticated(): Auth {
	const dispatch: dispatcherUser = useAppDispatch();

	const { pathname }: Location = useLocation();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const navigate: NavigateFunction = useNavigate();

	const useIsLogged: () => boolean = () => {
		if (!logger.length) {
			const email: LocalStorage = window.localStorage.getItem('email');

			const password: LocalStorage = window.localStorage.getItem('password');

			return email && password
				? dispatch(getUser(prevSubmit({ email, password }, pathname)))
				: false;
		}
		return true;
	};

	const handleSubmit: Submit = ({ email, password }: Type) => {
		useIsLogged()
			? logger.map(({ password, email, id, nombres }: LogInAction) => {
					window.localStorage.setItem('nombres', nombres);

					window.localStorage.setItem('id', id.toString());

					window.localStorage.setItem('email', email);

					window.localStorage.setItem('password', password);

					return navigate('/');
			  })
			: dispatch(getUser(prevSubmit({ email, password }, pathname)));
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
		code: '',
		surname: '',
		name: '',
		country: '',
		state: '',
		direction: '',
		number: '',
	};

	return { handleSubmit, defaultInputs, pathname, useIsLogged };
}

export default useAuthenticated;
