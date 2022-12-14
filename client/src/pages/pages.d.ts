import { FormikHelpers } from 'formik';

interface RouteError {
	status: number;
	statusText: string;
	error: object;
}

interface Type {
	email?: string;
	password?: string;
}

type Helpers = FormikHelpers<Type>;
