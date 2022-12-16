import { Request, Response } from 'express';
import Category from '../../models/Category';
import { NOT_FOUND, OK } from '../protocols';

async function getCategory(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const category = await Category.findOne({ where: { id } });
		return res.status(OK).send(category);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getCategory;
