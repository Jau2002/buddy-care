import { Request, Response } from 'express';
import ShoppingBasket from '../../models/ShoppingBasket';
import { CONFLICT, CREATE } from '../protocols';

export async function postItemShoppingBasket(
	req: Request,
	res: Response
): Promise<Response> {
	const { id, id_cliente, id_articulo, cantidad, comfav, falta, halta, fvto } =
		req.body;
	try {
		const newShoppingBasket = await ShoppingBasket.create({
			id,
			id_cliente,
			id_articulo,
			cantidad,
			comfav,
			falta,
			halta,
			fvto,
		});
		return res.status(CREATE).send(newShoppingBasket);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postItemShoppingBasket;
