import type { Mail } from './utils';

function massive(destiny: string | undefined, path: string): Mail {
	let mailer: Mail = {};

	if (path === '/signIn/') {
		mailer = {
			mail: destiny,
			asunto: 'Se a registrado correctamente',
			cuerpo: `<h1>Estimado usuario ${destiny}</h1> <br> <p>se a registrado ${new Date()}.</p> <span>Si no se ha registrado recientemente le aconsejamos cambie su contraseña <a href='https://buddy-care.netlify.app/signIn/user' target='_blank' rel='noreferrer'>Cambiar contraseña</span>`,
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
