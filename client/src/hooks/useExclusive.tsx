import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { ArticleAction } from '../features/article/article';
import { getArticles } from '../features/article/articleActions';
import { selectorArticle } from '../features/article/articleSlice';
import type { dispatcherArticles, Exclusive } from './hook';

function useExclusive(): Exclusive {
	const dispatch: dispatcherArticles = useAppDispatch();

	const article: ArticleAction[] = useAppSelector(selectorArticle);

	useEffect(() => {
		dispatch(getArticles());
	}, [dispatch]);

	return { article };
}

export default useExclusive;
