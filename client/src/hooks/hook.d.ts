import { FormikHelpers } from 'formik';
import type { Type } from '../components/components';

type Helpers = FormikHelpers<Type>;

type Submit = (values: Type, { resetForm }: Helpers) => any;

interface Auth {
	handleSubmit: Submit;
	defaultInputs: Type;
}
