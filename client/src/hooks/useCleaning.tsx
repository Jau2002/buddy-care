import { useAppDispatch, useAppSelector } from '../app/hook';
import { clearUser, getUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import { LogInAction } from '../features/reducers';
import prevSubmit from '../utils/prevSubmit';
import type {
	Cleaning,
	dispatchedUser,
	LocalStorage,
	validateIsLogged,
} from './hook';

function useCleaning(): Cleaning {
	const dispatch: dispatchedUser = useAppDispatch();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const getIsALogged: validateIsLogged = (): boolean => {
		if (!logger.length) {
			const email: LocalStorage = localStorage.getItem('email');
			const password: LocalStorage = localStorage.getItem('password');
			return email && password
				? dispatch(getUser(prevSubmit({ email, password })))
				: false;
		}
		return true;
	};

	const handleClick = (): any => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		localStorage.removeItem('nombres');
		localStorage.removeItem('id');
		dispatch(clearUser());
	};

	return { handleClick, getIsALogged, logger };
}

export default useCleaning;
