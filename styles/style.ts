import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CharacterImage = styled.img`
  width: 100%;
  border: 8px solid;
  border-color: #a7cb54;
  border-radius: 30px;
`;
export const CharacterName = styled.h1`
  color: #a7cb54;
  margin: 10px 0px 0px 0px;
  font-weight: 800;
`;
export const DetailsContainer = styled.div`
  background-color: rgba(60, 60, 60, 0.7);
  max-width: 500px;
  backdrop-filter: blur(10px);
  border: 1px solid;
  border-color: #a7cb54;
  padding: 30px;
  border-radius: 30px;
`;
export const DetailsContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Specie = styled.p`
  color: #a7cb54;
`;
export const Detail = styled.p`
  color: white;
  width: 50%;
`;
