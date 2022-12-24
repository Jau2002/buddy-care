import { Path } from 'react-router-dom';
import type { Type } from '../components/components';

type Submit = (values: Type) => any;

interface Auth {
	handleSubmit: Submit;
	defaultInputs: Type;
	pathname: string;
}

interface Location extends Path {
	state: unknown;
	key: Key;
}
