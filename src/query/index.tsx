import { gql } from "@apollo/client";

/*
 * id : pokemon id
 * name: pokemon name
 */
export const GET_POKEMON = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			number
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
			types
			resistant
			weaknesses
			fleeRate
			maxCP
			maxHP
			image
		}
	}
`;

/*
 * id : pokemon id (requied)
 * name: pokemon name
 */
export const GET_ATTACK = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			name
			attacks {
				fast {
					name
					type
					damage
				}
				special {
					name
					type
					damage
				}
			}
		}
	}
`;

/*
 * id : pokemon id
 * name: pokemon name
 */
export const GET_EVOLITIONS = gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			id
			name
			evolutions {
				id
				number
				name
				classification
				image
			}
		}
	}
`;
