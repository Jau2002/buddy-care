import { Request, Response } from 'express';
import Article from '../../models/Article';
import { NOT_FOUND, OK } from '../protocols';

async function getAllArticles(_: Request, res: Response): Promise<Response> {
	try {
		const totalArticles = await Article.findAll({
			attributes: [
				'id',
				'nombre',
				'rubro',
				'descripcion',
				'fotos',
				'id_vet',
				'precio',
				'stock',
				'ptoped',
				'ptovta',
				'overstock',
				'evento',
				'falta',
				'halta',
				'fmodif',
				'hmodif',
				'id_operador',
				'estado',
			],
		});
		return res.status(OK).send(totalArticles);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllArticles;
