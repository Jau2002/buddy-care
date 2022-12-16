import { Request, Response } from 'express';
import Commerce from '../../models/Commerce';
import { NOT_FOUND, OK } from '../protocols';

async function putCommerce(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const {
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
		const commerceModified: any | null = await Commerce.findByPk(id);

		commerceModified.id_cliente = id_cliente;
		commerceModified.tipo = tipo;
		commerceModified.id_articulo = id_articulo;
		commerceModified.fecha = fecha;
		commerceModified.detalle = detalle;
		commerceModified.importe = importe;
		commerceModified.comprobante = comprobante;
		commerceModified.cuota = cuota;
		commerceModified.mediopago = mediopago;
		commerceModified.falta = falta;
		commerceModified.decuota = decuota;
		commerceModified.halta = halta;

		await commerceModified.save();

		return res.status(OK).send(commerceModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putCommerce;
