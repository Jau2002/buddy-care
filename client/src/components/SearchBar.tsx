import type { ReactElement } from 'react';
import useFilter from '../hooks/useFilter';

function SearchBar(): ReactElement {
	const { search, handleOnSearch } = useFilter();
	return (
		<form onSubmit={handleOnSearch}>
			<div className='row'>
				<div className='form-group col-md-6'>
					<input
						ref={search}
						type='text'
						className='form-control form-contro-lg'
						placeholder='ingrese nombre del artículo'
					/>
				</div>
				<div>
					<button
						type='submit'
						className='btn btn-lg btn-danger btn-block'
					>
						Buscar
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchBar;
