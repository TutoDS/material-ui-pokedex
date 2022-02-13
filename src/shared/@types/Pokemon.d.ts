type TypesOfPokemon = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};

export type PokemonType = {
	id: number;
	name: string;
	species: {
		name: string;
		url: string;
	};
	height: number;
	weight: number;
	types: TypesOfPokemon[];
	sprites: {
		back_default: string;
		back_female?: string;
		back_shiny: string;
		back_shiny_female?: string;
		front_default: string;
		front_female?: string;
		front_shiny: string;
		front_shiny_female?: string;
	};
};
