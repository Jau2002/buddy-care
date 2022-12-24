import { Request, Response } from 'express';
import Review from '../../models/Review';
import { CONFLICT, CREATE } from '../protocols';

async function postReview(req: Request, res: Response): Promise<Response> {
	const {
		id,
		id_cliente,
		destino,
		titulo,
		nota,
		calificacion,
		estado,
		falta,
		halta,
	} = req.body;
	try {
		const newReview = await Review.create({
			id,
			id_cliente,
			destino,
			titulo,
			nota,
			calificacion,
			estado,
			falta,
			halta,
		});
		return res.status(CREATE).send(newReview);
	} catch (err) {
		return res.status(CONFLICT).json({ message: (err as Error).message });
	}
}

export default postReview;
