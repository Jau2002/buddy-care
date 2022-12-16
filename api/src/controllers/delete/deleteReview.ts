import { Request, Response } from 'express';
import Review from '../../models/Review';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteReview(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Review.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteReview;
