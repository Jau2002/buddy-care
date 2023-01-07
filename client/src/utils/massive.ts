import type { Mail } from './utils';

function massive(destiny: string | undefined, path: string): Mail {
	let mailer: Mail = {};

	if (path === '/signIn/') {
		mailer = {
			mail: destiny,
			asunto: 'Se a registrado correctamente',
			cuerpo: `Usuario ${destiny} se a registrado ${new Date()} si no concuerda la información le aconsejamos cambie su contraseña`,
		};
	}

	if (path === '/signUp') {
		mailer = {
			mail: destiny,
			asunto: 'Se a creado la cuenta satisfactoriamente',
			cuerpo: `Se ha creado la cuenta ${destiny} el dia de ${new Date()}`,
		};
	}
	return mailer;
}

export default massive;
