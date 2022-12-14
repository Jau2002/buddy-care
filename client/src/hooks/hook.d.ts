import type { Helpers, Type } from '../pages/pages';

type Submit = (values: Type, { resetForm }: Helpers) => any;

interface Auth {
	handleSubmit: Submit;
	defaultInputs: Type;
}
