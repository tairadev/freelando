import { css, Global } from '@emotion/react';

const estilos = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Estilos = () => {
  return (
    <Global styles={estilos} />
  );
};