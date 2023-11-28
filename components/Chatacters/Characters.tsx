import React, { FC } from 'react';
import { CharacterInterface, CharactersInterface } from '@/app/interface';
import { ListBox } from './style';
import CharacterCard from '../CharacterCard/Character';
import { Button } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';

interface CharactersProps {
  characters: CharactersInterface;
  setCharacters: (characters: CharactersInterface | null) => void;
}

const Characters: FC<CharactersProps> = ({ characters, setCharacters }) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: '#A7CB54',
          color: 'black',
          border: '0px',
          margin: '50px',
        }}
        onClick={() => setCharacters(null)}
      >
        Back to Home
      </Button>

      <ListBox>
        {characters.results.map((character, i) => (
          <CharacterCard
            key={`${character}-${i}`}
            character={character}
          ></CharacterCard>
        ))}
      </ListBox>
      <Pagination characters={characters} setCharacters={setCharacters} />
      <Button
        style={{
          backgroundColor: '#A7CB54',
          color: 'black',
          border: '0px',
          margin: '50px',
        }}
        onClick={() => setCharacters(null)}
      >
        Back to Home
      </Button>
      {/* - que pagina estoy
      - boton next/prev llamada api
      - estado counter useEffect que chekee si counter es menor 1 que lo iguale a 1, array de dependencias igual al counter */}
    </>
  );
};
export default Characters;
