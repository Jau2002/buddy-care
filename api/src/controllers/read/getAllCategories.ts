import { Request, Response } from 'express';
import Category from '../../models/Category';
import { NOT_FOUND, OK } from '../protocols';

async function getAllCategories(_: Request, res: Response): Promise<Response> {
	try {
		const totalCategories = await Category.findAll({
			attributes: ['id', 'descripcion', 'foto', 'estado'],
		});
		return res.status(OK).send(totalCategories);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllCategories;
