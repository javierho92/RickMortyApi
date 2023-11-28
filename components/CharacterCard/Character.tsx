import { CharacterInterface } from '@/app/interface';
import Link from 'next/link';
import { FC } from 'react';
import { CardText, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

interface CharacterProps {
  character: CharacterInterface;
}
const CharacterCard: FC<CharacterProps> = ({ character }) => {
  return (
    <>
      <Link
        href={`/characterDetails/${character.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Card
          style={{
            width: '18rem',
            backgroundColor: 'rgb(60, 60, 60,0.8)',
            borderColor: '#8c8c8c',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <CardTitle style={{ color: 'white' }}>{character.name}</CardTitle>
            <hr
              style={{
                border: '1px solid white',
                width: '100%',
                padding: '0px',
              }}
            ></hr>
            <CardText style={{ color: 'rgb(140, 140, 140)' }}>
              {character.species}
            </CardText>
          </Card.Body>
        </Card>
        {/* <div>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>
        <span></span>
        </p>
      </div> */}
      </Link>
    </>
  );
};
export default CharacterCard;
