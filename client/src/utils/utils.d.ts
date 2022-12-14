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
	id?: number[];
}

interface Previous {
	email: string;
	password: string;
	id: number[];
}
