import styled from 'styled-components';

export const Body = styled.body`
  background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9AAGfy2pnnVszg64cvoux9_8rBkd8QH3EplC5jiY3vxqQyDO_iW7TDi-U6hvZtw5cYnTL3MYN6vzpk4BdeRE_kMbkgz-pOC-hxIiE43O8slEfsSmLyb1KovMbpdfTc1s-kqdIV40o5vejHd2wAJ171W4VqPIbIrP4APuuoHaZ9E1NV2-44pyAQgrmdA/s3840/RICK%20AND%20MORTY%20GALAXY%20WALLPAPER%2012720232.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    background-size: cover;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -7000;
  }
`;
