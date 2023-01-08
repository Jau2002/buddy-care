import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	ArticleAction,
	ArticleState,
	PayloadArticle,
	SelectorArticle,
	SliceArticle,
} from './article';

const initialState: ArticleState = {
	articles: [],
};

const articleSlice: SliceArticle = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getAllArticles: (
			state: any,
			{ payload }: PayloadArticle
		): ArticleState => ({
			...state,
			articles: payload,
		}),
		getFilterArticle: (
			state: any,
			{ payload }: PayloadArticle
		): ArticleState => ({
			...state,
			articles: payload,
		}),
	},
});

export const selectorArticle: SelectorArticle = ({
	commerce,
}: RootState): ArticleAction[] => commerce.articles;

export const { getAllArticles, getFilterArticle } = articleSlice.actions;

export default articleSlice.reducer;
