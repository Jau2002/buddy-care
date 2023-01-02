import { useAppDispatch, useAppSelector } from '../app/hook';
import type { LogInAction } from '../features/logger/logger';
import { clearUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import type { Cleaning, dispatchedUser } from './hook';

function useCleaning(): Cleaning {
	const dispatch: dispatchedUser = useAppDispatch();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const handleClick = (): any => {
		window.localStorage.removeItem('email');

		window.localStorage.removeItem('password');

		window.localStorage.removeItem('nombres');

		window.localStorage.removeItem('id');

		dispatch(clearUser());
	};

	return { handleClick, logger };
}

export default useCleaning;
