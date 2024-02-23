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
