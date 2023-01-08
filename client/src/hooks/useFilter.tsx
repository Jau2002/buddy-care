import { createRef } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../app/hook';
import { getArticleFilter } from '../features/article/articleActions';
import prevSubmit from '../utils/prevSubmit';
import type { dispatcherArticles, Filter } from './hook';
import usePaging from './usePaging';

function useFilter(): Filter {
	const { setTotalPages } = usePaging();

	const dispatch: dispatcherArticles = useAppDispatch();

	const { pathname }: Location = useLocation();

	const search: any = createRef();

	const handleOnSearch: any = (event) => {
		event.preventDefault();
		const search_article = search.current.value;
		dispatch(getArticleFilter(prevSubmit({ search_article }, pathname)));
		setTotalPages(1);
	};

	return { search, handleOnSearch };
}

export default useFilter;
