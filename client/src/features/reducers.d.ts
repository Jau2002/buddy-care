import { RootState } from '../app/store';

export interface LogInState {
	log: LogInAction[];
}

interface LogInAction {
	username?: string;
	password?: string;
	apellido?: string;
	nombres?: string;
	id?: number;
}

type GetUserAction = (dispatch) => Promise<DispatchUser>;

interface DispatchUser {
	payload?: LogInAction;
	type: string;
}

type selectorLogger = (state: RootState) => LogInAction[];
