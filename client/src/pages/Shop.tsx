import type { ReactElement } from 'react';
import CardArticle from '../components/CardArticle';
import Header from '../components/Header';
import Page from '../components/Page';
import SearchBar from '../components/SearchBar';
import useExclusive from '../hooks/useExclusive';

function Shop(): ReactElement {
	const { article } = useExclusive();
	return (
		<>
			<Header />
			<SearchBar />
			<CardArticle article={article} />
			<Page />
		</>
	);
}

export default Shop;
