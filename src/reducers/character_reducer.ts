import { Reducer } from "redux";
import { CharacterActions, CharacterActionTypes } from "../actions/character";

// Define the Character type
export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

// Define the state
export interface ICharacterState {
  readonly characters: ICharacter[];
}

// Initialize the state
const initial_character_state: ICharacterState = {
  characters: []
};

export const character_reducer: Reducer<ICharacterState, CharacterActions> = (
  state = initial_character_state,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.GET_ALL: {
      return {
        ...state,
        characters: action.characters
      };
    }
    default:
      return state;
  }
};
