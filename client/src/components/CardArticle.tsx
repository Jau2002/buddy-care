import type { ReactElement } from 'react';
import type { ArticleAction } from '../features/article/article';
import type { CardArticles } from './components';

function CardArticle({ article }: CardArticles): ReactElement {
	return (
		<div className='row justify-content-center'>
			{article.map(
				({
					id,
					nombre,
					contenido,
					descripcion,
					precio,
				}: ArticleAction): ReactElement => (
					<div
						key={id}
						className='justify-content-center'
					>
						<div className='card me-3'>
							<div className='card-body'>
								<img
									src={contenido}
									alt={nombre}
									className='card-img-top'
								/>
								<h5 className='card-title'>{nombre}</h5>
								<p>{descripcion}</p>
								<h5 className='card-title'>Precio ${precio}</h5>
								<br></br>
								<button
									type='button'
									className='btn btn-secondary'
								>
									Comprar
								</button>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
}

export default CardArticle;
