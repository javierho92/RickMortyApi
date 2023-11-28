import styled from 'styled-components';

interface AppProps {
  height: string | null;
}

export const HomeContainer = styled.div<AppProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? height : null)};
`;
export const ImageHome = styled.img`
  max-width: 600px;
`;
export const TitleHome = styled.h1`
  color: #a7cb54;
  /* text-align: center; */
`;
