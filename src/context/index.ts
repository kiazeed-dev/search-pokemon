export interface dataSearchType {
	isLoading: boolean;
	isError: boolean;
	data: pokemon | string;
}

export interface pokemon {
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
