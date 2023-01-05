import { PetAction } from '../features/pets/pets';

export interface Navigate {
	route: string;
	url: string;
}

interface Attributes {
	type: string;
	placeholder: string;
	name: string;
	display: string;
}

interface Query {
	myQuery?: string;
}

interface Submit {
	email?: string;
	password?: string;
	id_client?: number[];
	id_pet?: PetAction;
}

interface Previous {
	email: string;
	password: string;
	id: number[];
}
