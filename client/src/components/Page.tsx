import type { ReactElement } from 'react';
import usePaging from '../hooks/usePaging';

function Page(): ReactElement {
	const {
		totalArticle,
		currentPage,
		totalPages,
		handlePrevPage,
		handleNextPage,
	} = usePaging();

	if (!totalArticle.length) {
		return <h1>never</h1>;
	}

	return (
		<>
			{currentPage > 1 && <button onClick={handlePrevPage}>Anterior</button>}
			{currentPage < totalPages && (
				<button onClick={handleNextPage}>Siguiente</button>
			)}
		</>
	);
}

export default Page;
