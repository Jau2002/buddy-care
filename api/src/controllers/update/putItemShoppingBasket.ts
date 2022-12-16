import { Request, Response } from 'express';
import ShoppingBasket from '../../models/ShoppingBasket';
import { NOT_FOUND, OK } from '../protocols';

async function putItemShoppingBasket(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	const { id_cliente, id_articulo, cantidad, comfav, falta, halta, fvto } =
		req.body;
	try {
		const itemModified: any | null = await ShoppingBasket.findByPk(id);

		itemModified.id_cliente = id_cliente;
		itemModified.id_articulo = id_articulo;
		itemModified.cantidad = cantidad;
		itemModified.comfav = comfav;
		itemModified.falta = falta;
		itemModified.halta = halta;
		itemModified.fvto = fvto;

		await itemModified.save();

		return res.status(OK).send(itemModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putItemShoppingBasket;
