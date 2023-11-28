import React, { useState } from 'react';
import { HomeContainer, ImageHome, TitleHome } from './style';
import Characters from '@/components/Chatacters/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { CharactersInterface } from '../../app/interface';
import { getAllCharacters } from '@/api/database';

const HomeRender = () => {
  const [characters, setCharacters] = useState<CharactersInterface | null>(
    null
  );

  const searchApi = async () => {
    const characters = await getAllCharacters(1);
    setCharacters(characters);
  };
  console.log({ characters });

  return (
    <>
      <HomeContainer height={!characters ? '100vh' : null}>
        <TitleHome style={{ fontSize: '4rem' }}>Rick and Morty</TitleHome>
        {characters === null ? (
          <>
            <ImageHome
              src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"
              alt="Rick & Morty"
            />
            <Button
              style={{
                backgroundColor: '#A7CB54',
                color: 'black',
                border: '0px',
                margin: '50px',
              }}
              onClick={searchApi}
            >
              Buscar Personajes
            </Button>
          </>
        ) : (
          <Characters characters={characters} setCharacters={setCharacters} />
        )}
      </HomeContainer>
    </>
  );
};
export default HomeRender;
