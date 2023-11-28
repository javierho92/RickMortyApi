/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.min.css';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CharacterInterface } from '@/app/interface';
import {
  CharacterImage,
  CharacterName,
  DetailsContainer,
  PageContainer,
} from '@/styles/style';
import { Gender } from '@/components/Pagination/style';
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
              <Gender>Gender: {character?.gender}</Gender>
            </DetailsContainer>
          </PageContainer>
        </RootLayout>
      );
    default:
      return <h1>Loading...</h1>;
  }
};
export default CharacterDetails;
