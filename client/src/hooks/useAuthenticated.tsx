import {
	Location,
	NavigateFunction,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { Type } from '../components/components';
import type { LogInAction, UserIsRegister } from '../features/logger/logger';
import {
	getUser,
	postUserRegister,
	validateUserIsRegister,
} from '../features/logger/logInActions';
import { selectLogIn, selectUser } from '../features/logger/logInSlice';
import { generatedMail } from '../features/mailer/mailAction';
import massive from '../utils/massive';
import prevSubmit from '../utils/prevSubmit';
import type { Auth, dispatcherUser, LocalStorage, Submit } from './hook';

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
				: navigate('/signIn/');
		}
		return true;
	};

	const user: UserIsRegister[] = useAppSelector(selectUser);

	const date = new Date();

	function getRandomInt(min: number, max: number): number {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	const handleSubmit: Submit = ({
		email,
		password,
		surname,
		country,
		direction,
		name,
		number,
		state,
		postal,
		Facebook,
		Instagram,
	}: Type) => {
		if (pathname === '/signIn/') {
			useIsLogged()
				? dispatch(getUser(prevSubmit({ email, password }, pathname))) &&
				  logger.map(({ password, email, id, nombres }: LogInAction) => {
						window.localStorage.setItem('nombres', nombres);

						window.localStorage.setItem('id', id.toString());

						window.localStorage.setItem('email', email);

						window.localStorage.setItem('password', password);

						dispatch(generatedMail(massive(email, pathname)));

						return navigate('/');
				  })
				: dispatch(getUser(prevSubmit({ email, password }, pathname)));
		}

		if (pathname === '/signIn/user') {
			dispatch(validateUserIsRegister(prevSubmit({ email }, pathname)));
			user.length && navigate('/signIn/password');
		}

		if (pathname === '/signUp') {
			dispatch(validateUserIsRegister(prevSubmit({ email }, pathname)));
			const registered = {
				id: getRandomInt(1111111, 9999999),
				apellido: surname,
				nombres: name,
				pais: country,
				localidad: state,
				direccion: direction,
				cp: postal,
				telefono: number,
				email,
				usuario: '',
				facebook: Facebook,
				password,
				instagram: Instagram,
				notas_int: '',
				falta: date.toLocaleDateString('en-GB').split('/').reverse().join('-'),
				halta: '00:00:00',
			};
			!user.length &&
				dispatch(postUserRegister(registered)) &&
				dispatch(generatedMail(massive(email, pathname))) &&
				navigate('/signIn/');
		}
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
		postal: '',
		Facebook: '',
		Instagram: '',
	};

	return { handleSubmit, defaultInputs, pathname, useIsLogged, logger };
}

export default useAuthenticated;
