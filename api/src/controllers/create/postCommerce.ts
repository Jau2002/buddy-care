import { Request, Response } from 'express';
import Commerce from '../../models/Commerce';
import { CONFLICT, CREATE } from '../protocols';

async function postCommerce(req: Request, res: Response): Promise<Response> {
	const {
		id,
		id_cliente,
		id_articulo,
		tipo,
		detalle,
		fecha,
		comprobante,
		importe,
		mediopago,
		cuota,
		decuota,
		falta,
		halta,
	} = req.body;
	try {
		const newCommerce = await Commerce.create({
			id,
			id_cliente,
			id_articulo,
			tipo,
			detalle,
			fecha,
			comprobante,
			importe,
			mediopago,
			cuota,
			decuota,
			falta,
			halta,
		});
		return res.status(CREATE).send(newCommerce);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postCommerce;
