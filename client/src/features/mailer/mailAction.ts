import { Dispatch } from '@reduxjs/toolkit';
import type { GeneratedMailer, MailerAction, PostMail } from './mail';
import { postMailer } from './mailSlice';

export function generatedMail(mail: MailerAction): PostMail {
	return async (dispatch: Dispatch): GeneratedMailer => {
		const res: Response = await window.fetch(
			'https://www.fpsoft.com.ar/pfmailer/api.php',
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(mail),
			}
		);
		const data: Response = await res.json();
		try {
			return dispatch(postMailer(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
