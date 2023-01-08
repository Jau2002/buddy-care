import { useEffect, useState } from 'react';
import type { ArticleAction } from '../features/article/article';
import type { Paging } from './hook';
import useExclusive from './useExclusive';

function usePaging(): Paging {
	const { article } = useExclusive();

	const [currentPage, setCurrentPage] = useState(1);

	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		setTotalPages(Math.ceil(article.length / 8));
	}, [article]);

	const totalArticle: ArticleAction[] = article.slice(
		(currentPage - 1) * 8,
		currentPage * 8
	);

	const handleNextPage = (): any => setCurrentPage(currentPage + 1);

	const handlePrevPage = (): any => setCurrentPage(currentPage - 1);

	return {
		totalArticle,
		currentPage,
		totalPages,
		handleNextPage,
		handlePrevPage,
		setTotalPages,
	};
}

export default usePaging;
