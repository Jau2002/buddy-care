import { Request, Response } from 'express';
import Commerce from '../../models/Commerce';
import { NOT_FOUND, OK } from '../protocols';

async function getAllCommerces(_: Request, res: Response): Promise<Response> {
	try {
		const totalCommerces = await Commerce.findAll({
			attributes: [
				'id',
				'id_cliente',
				'id_articulo',
				'tipo',
				'detalle',
				'fecha',
				'comprobante',
				'importe',
				'mediopago',
				'cuota',
				'decuota',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalCommerces);
	} catch (err) {
		return res.status(NOT_FOUND).send({
			message: (err as Error).message,
		});
	}
}

export default getAllCommerces;
