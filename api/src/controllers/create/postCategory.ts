import { Request, Response } from 'express';
import Category from '../../models/Category';
import { CONFLICT, CREATE } from '../protocols';

async function postCategory(req: Request, res: Response): Promise<Response> {
	const { id, descripcion, foto, estado } = req.body;
	try {
		let newCategory = await Category.create({ id, descripcion, foto, estado });
		return res.status(CREATE).send(newCategory);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postCategory;
