import { Request, Response } from 'express';
import Review from '../../models/Review';
import { NOT_FOUND, OK } from '../protocols';

async function getReview(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const review = await Review.findOne({ where: { id } });
		return res.status(OK).send(review);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getReview;
