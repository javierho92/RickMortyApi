/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.min.css';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CharacterInterface } from '@/app/interface';
import {
  CharacterImage,
  CharacterName,
  Detail,
  DetailsContainer,
  DetailsContainer2,
  PageContainer,
  Specie,
} from '@/styles/style';
import RootLayout from '@/app/layout';

interface CharacterDetailsProps {
  character: CharacterInterface;
}

const CharacterDetails: FC<CharacterDetailsProps> = () => {
  const [character, setCharacter] = useState<CharacterInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const characterId = router.query.characterId;

  const searchApi = async () => {
    const api = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const characterApi = await api.json();
    setCharacter(characterApi);
    setIsLoading(false);
  };

  useEffect(() => {
    if (characterId) searchApi();
  }, [characterId]);

  switch (isLoading) {
    case false:
      return (
        <RootLayout>
          <PageContainer>
            <DetailsContainer>
              <CharacterImage src={character!.image} alt="alternativo" />
              <CharacterName>{character!.name}</CharacterName>
              <Specie>{character?.species}</Specie>
              <DetailsContainer2>
                <Detail>Gender: {character?.gender}</Detail>
                <Detail>Status: {character?.status} </Detail>
                <Detail>Origin: {character?.origin.name} </Detail>
                <Detail>Location: {character?.location.name} </Detail>
                <Detail>Episodes: {character?.episode.length} </Detail>
                <Detail>Created: {character?.created} </Detail>
              </DetailsContainer2>
            </DetailsContainer>
          </PageContainer>
        </RootLayout>
      );
    default:
      return <h1>Loading...</h1>;
  }
};
export default CharacterDetails;
