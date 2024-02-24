export interface InputSearch {
	search: string;
	setSearch: (search: string) => void;
}

export interface dataSearchType {
	isError: boolean;
	data: pokemonInfo | string;
}
export interface pokemonInfo {
	id: string;
	number: string;
	name: string;
	weight: {
		minimum: string;
		maximum: string;
	};
	height: {
		minimum: string;
		maximum: string;
	};
	classification: string;
	types: Array<string>;
	resistant: Array<string>;
	weaknesses: Array<string>;
	fleeRate: number;
	maxCP: number;
	maxHP: number;
	image: string;
}

export interface pokemonAttack {
	id: string;
	name: string;
	attacks: {
		fast: Array<attacksInfo>;
		special: Array<attacksInfo>;
	};
}

export interface attacksInfo {
	name: string;
	type: string;
	damage: number;
}

export interface pokemonEvolution {
	id: string;
	name: string;
	evolutions: Array<evolutionInfo>;
}

export interface evolutionInfo {
	id: string;
	number: string;
	name: string;
	image: string;
}
