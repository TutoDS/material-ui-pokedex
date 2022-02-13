export type PokemonsResponseType = {
	count: number;
	next?: string;
	previous?: string;
	results: {
		name: string;
		url: string;
	}[];
};

export type PokemonResponseType = {
	id: number;
	name: string;
	url: string;
	image: string;
};
