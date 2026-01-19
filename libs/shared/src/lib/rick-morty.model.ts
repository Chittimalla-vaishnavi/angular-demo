export interface RickMortyCharacter {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  created: string;
  episode: { name: string }[];
}

export enum CharacterStatus {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

export enum CharacterGender {
  MALE = 'Male',
  FEMALE = 'Female',
  GENDER_LESS = 'Genderless',
  UNKNOWN = 'unknown',
}
