export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {};
  location: {};
  image: string;
  episodes: string[];
  url: string;
  created: string;
}
export interface CharactersInterface {
  info: {
    count: number;
    pages: number;
    next: string;
  };
  results: CharacterInterface[];
}
