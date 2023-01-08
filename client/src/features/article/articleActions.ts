import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import type { Query } from '../../utils/utils';
import type { GetAllArticles, GetArticles, GetFilterArticle } from './article';
import { getAllArticles, getFilterArticle } from './articleSlice';

export function getArticleFilter(query: Query): any {
	return async (dispatch: Dispatch): GetFilterArticle => {
		const { data }: AxiosResponse = await axios.post('/query', query);
		try {
			return dispatch(getFilterArticle(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export function getArticles(): GetArticles {
	return async (dispatch: Dispatch): GetAllArticles => {
		const { data }: AxiosResponse = await axios.get('/articulos');
		try {
			return dispatch(getAllArticles(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
