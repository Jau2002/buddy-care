import type { Query, Submit } from './utils';

function prevSubmit(
	{ email, password, id_client, id_pet }: Submit,
	path: string
): Query {
	let query: Query = {};

	if (path === ('/signIn/' || '/pets' || '/pet/')) {
		query = {
			myQuery: `SELECT email, password, apellido, nombres, id FROM pfvet_clientes WHERE TRIM(email)='${email}' AND TRIM(password)='${password}' LIMIT 1;`,
		};
	}
	if (path === '/pets') {
		query = {
			myQuery: `SELECT pfvet_mascotas.*, pfvet_adjuntos.* FROM pfvet_mascotas INNER JOIN pfvet_adjuntos ON pfvet_mascotas.id=pfvet_adjuntos.id_originador WHERE pfvet_mascotas.id_cliente=${id_client} AND TRIM(originador)='MASCOTA';`,
		};
	}
	if (path.includes('/pet/')) {
		query = {
			myQuery: `select pfvet_mascotas.*, pfvet_adjuntos.* from pfvet_mascotas inner join pfvet_adjuntos on pfvet_mascotas.id=pfvet_adjuntos.id_originador WHERE pfvet_mascotas.id_cliente=${id_client} and pfvet_mascotas.id=${id_pet} and trim(pfvet_adjuntos.originador)='MASCOTA';`,
		};
	}
	if (path === '/signUp') {
		query = {
			myQuery: `select email from pfvet_clientes where trim(email) ='${email}' limit  1;`,
		};
	}
	return query;
}

export default prevSubmit;
