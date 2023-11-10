import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background.backgroundPrimary};
    color: ${(props) => props.theme.fonts.fontPrimary};
  }
`;