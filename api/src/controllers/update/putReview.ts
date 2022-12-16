import { Request, Response } from 'express';
import Review from '../../models/Review';
import { NOT_FOUND, OK } from '../protocols';

async function putReview(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const {
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
		const reviewModified: any | null = await Review.findByPk(id);

		reviewModified.id_cliente = id_cliente;
		reviewModified.destino = destino;
		reviewModified.titulo = titulo;
		reviewModified.nota = nota;
		reviewModified.calificacion = calificacion;
		reviewModified.estado = estado;
		reviewModified.falta = falta;
		reviewModified.halta = halta;

		await reviewModified.save();

		return res.status(OK).send(reviewModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putReview;
