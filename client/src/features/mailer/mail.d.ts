import type { Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';

interface MailerAction {
	mail?: string;
	asunto?: string;
	cuerpo?: string;
}

interface MailState {
	mail: MailerAction[];
}

type SliceMailer = Slice<MailState>;

type PayloadMailer = PayloadAction<MailState>;

type SelectorMailer = (state: RootState) => MailerAction[];

interface DispatchMail {
	payload?: MailerAction;
	type: string;
}

type GeneratedMailer = Promise<DispatchMail>;

type PostMail = (dispatch: Dispatch) => GeneratedMailer;
