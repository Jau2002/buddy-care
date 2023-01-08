import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import type { Query } from '../../utils/utils';
import type {
	ClearUserAction,
	ClearUserFunc,
	CreateUser,
	DispatchLogger,
	GetUser,
	GetUserAction,
	PostUserRegister,
	ValidateUser,
	ValidateUserIsRegister,
} from './logger';
import {
	clearUserIfLogIn,
	createUser,
	getUserIsLogIn,
	validateUser,
} from './logInSlice';

export function getUser(query: Query): GetUserAction {
	return async (dispatch: Dispatch): GetUser => {
		const { data }: AxiosResponse = await axios.post('/query', query);
		try {
			return dispatch(getUserIsLogIn(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export const clearUser: ClearUserFunc =
	(): ClearUserAction =>
	(dispatch: Dispatch): DispatchLogger =>
		dispatch(clearUserIfLogIn([]));

export function validateUserIsRegister(query: Query): ValidateUserIsRegister {
	return async (dispatch: Dispatch): ValidateUser => {
		const { data }: AxiosResponse = await axios.post('/query', query);
		try {
			return dispatch(validateUser(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export function postUserRegister(body: object): PostUserRegister {
	return async (dispatch: Dispatch): CreateUser => {
		const { data }: AxiosResponse = await axios.post('/clientes', body);
		try {
			return dispatch(createUser(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
