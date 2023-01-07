import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	MailerAction,
	MailState,
	PayloadMailer,
	SelectorMailer,
	SliceMailer,
} from './mail';

const initialState: MailState = {
	mail: [],
};

const mailSlice: SliceMailer = createSlice({
	name: 'mail',
	initialState,
	reducers: {
		postMailer: (state: any, { payload }: PayloadMailer): MailState => ({
			...state,
			mail: payload,
		}),
	},
});

export const selectMailer: SelectorMailer = ({
	massive,
}: RootState): MailerAction[] => massive.mail;

export const { postMailer } = mailSlice.actions;

export default mailSlice.reducer;
