import { Request, Response } from 'express';
import Category from '../../models/Category';
import { NOT_FOUND, OK } from '../protocols';

async function putCategory(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { descripcion, foto, estado } = req.body;
	try {
		const categoryModified: any | null = await Category.findByPk(id);

		categoryModified.descripcion = descripcion;
		categoryModified.foto = foto;
		categoryModified.estado = estado;

		await categoryModified.save();

		return res.status(OK).send(categoryModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putCategory;
