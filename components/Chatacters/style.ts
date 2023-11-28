import styled from 'styled-components';

export const ButtonBack = styled.button`
  color: black;
`;
export const ListBox = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1000px;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
  @media screen and (max-width: 860px) {
    justify-content: center;
  }
`;
