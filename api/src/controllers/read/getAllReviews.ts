import { Request, Response } from 'express';
import Review from '../../models/Review';
import { NOT_FOUND, OK } from '../protocols';

async function getAllReviews(_: Request, res: Response): Promise<Response> {
	try {
		const totalReviews = await Review.findAll({
			attributes: [
				'id',
				'id_cliente',
				'destino',
				'titulo',
				'nota',
				'calificacion',
				'estado',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalReviews);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllReviews;
