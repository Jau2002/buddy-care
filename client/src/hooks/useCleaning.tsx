import { useAppDispatch, useAppSelector } from '../app/hook';
import { clearUser } from '../features/logger/logInActions';
import { selectLogIn } from '../features/logger/logInSlice';
import { LogInAction } from '../features/reducers';
import type { Cleaning, dispatchedUser } from './hook';

function useCleaning(): Cleaning {
	const dispatch: dispatchedUser = useAppDispatch();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const handleClick = (): any => {
		localStorage.removeItem('email');
		localStorage.removeItem('nombres');
		dispatch(clearUser());
	};

	return { logger, handleClick };
}

export default useCleaning;
