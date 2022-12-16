import { Request, Response } from 'express';
import Category from '../../models/Category';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteCategory(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Category.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteCategory;
