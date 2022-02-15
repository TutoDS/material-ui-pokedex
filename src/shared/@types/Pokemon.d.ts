import { TYPE_COLOR } from 'shared/utils/getTypeColor';

type TypesOfPokemon = {
	slot: number;
	type: {
		name: keyof typeof TYPE_COLOR;
		url: string;
	};
};

type PokemonSpritesType = {
	back_default: string;
	back_female?: string;
	back_shiny: string;
	back_shiny_female?: string;
	front_default: string;
	front_female?: string;
	front_shiny: string;
	front_shiny_female?: string;

	other: {
		dream_world: {
			front_default: string;
			front_female?: string;
		};

		home: {
			front_default: string;
			font_female?: string;
			front_shiny: string;
			front_shiny_female?: string;
		};
	};

	'official-artwork': {
		front_default: string;
	};
};

type PokemonMovesType = {
	move: {
		name: string;
		url: string;
	};
	version_group_details: {
		level_learned_at: number;

		move_learn_method: {
			name: string;
			url: string;
		};

		version_group: {
			name: string;
			url: string;
		};
	}[];
};

type PokemonStatsType = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

type PokemonHeldItemType = {
	item: {
		name: string;
		url: string;
	};
	version_details: {
		rarity: number;
		version: {
			name: string;
			url: string;
		};
	}[];
};

type PokemonAbilityType = {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
};

export type PokemonType = {
	id: number;
	abilities: PokemonAbilityType[];
	name: string;
	species: {
		name: string;
		url: string;
	};
	height: number;
	weight: number;
	types: TypesOfPokemon[];
	sprites: PokemonSpritesType;
	moves: PokemonMovesType[];
	stats: PokemonStatsType[];
	held_items: PokemonHeldItemType[];
};
