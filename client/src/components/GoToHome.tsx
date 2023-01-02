import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function GoToHome(): ReactElement {
	return (
		<Link
			to='/'
			className='small text-muted'
		>
			<button className='btn btn-outline-dark form-article--p'>
				Pagina principal
			</button>
		</Link>
	);
}

export default GoToHome;
