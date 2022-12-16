import { Request, Response } from 'express';
import ShoppingBasket from '../../models/ShoppingBasket';
import { NOT_FOUND, OK } from '../protocols';

async function getAllItemsShoppingBasket(
	_: Request,
	res: Response
): Promise<Response> {
	try {
		const totalItems = await ShoppingBasket.findAll({
			attributes: [
				'id',
				'id_cliente',
				'id_articulo',
				'cantidad',
				'comfav',
				'falta',
				'halta',
				'fvto',
			],
		});
		return res.status(OK).send(totalItems);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllItemsShoppingBasket;
