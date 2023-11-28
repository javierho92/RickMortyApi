import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { PageNumber, PaginationContainer } from './style';
import { CharactersInterface } from '@/app/interface';
import { getAllCharacters } from '@/api/database';

interface PaginationProps {
  characters: CharactersInterface;
  setCharacters: (characters: CharactersInterface | null) => void;
}
const Pagination: FC<PaginationProps> = ({ characters, setCharacters }) => {
  const [pageCounter, setPageCounter] = useState<number>(1);

  useEffect(() => {
    getAllCharacters(pageCounter)
      .then((res) => {
        setCharacters(res);
      })
      .catch((error) => {
        console.log(error);
      });
    if (pageCounter > 42) setPageCounter(42);
    if (pageCounter < 1) setPageCounter(1);
  }, [pageCounter]);

  return (
    <PaginationContainer>
      <Button
        style={{
          color: '#A7CB54',
          border: '0px',
          margin: '10px',
          borderRadius: '50px',
          backgroundColor: 'rgb(60, 60, 60,0.8)',
          backdropFilter: 'blur(10px)',
        }}
        onClick={() => setPageCounter(pageCounter - 1)}
      >
        {'<'}
      </Button>
      <PageNumber>
        {pageCounter} / {characters.info.pages}
      </PageNumber>
      <Button
        style={{
          color: '#A7CB54',
          border: '0px',
          margin: '10px',
          borderRadius: '50px',
          backgroundColor: 'rgb(60, 60, 60,0.8)',
          backdropFilter: 'blur(10px)',
        }}
        onClick={() => setPageCounter(pageCounter + 1)}
      >
        {'>'}
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
