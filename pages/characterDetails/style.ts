import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CharacterImage = styled.img`
  max-width: 300px;
  border: 8px solid;
  border-color: #a7cb54;
  border-radius: 30px;
`;
export const CharacterName = styled.h1`
  color: #a7cb54;
  margin: 10px 0px 10px 0px;
  font-weight: 800;
`;
export const DetailsContainer = styled.div`
  background-color: rgba(60, 60, 60, 0.7);
  backdrop-filter: blur(10px);
  border: 0.5px solid;
  border-color: white;
  padding: 30px;
  border-radius: 30px;
`;
