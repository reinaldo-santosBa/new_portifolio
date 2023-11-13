import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${(props) => props.theme.background.backgroundPrimary};
    color: ${(props) => props.theme.fonts.fontPrimary};
    font-family:  ${(props) => props.theme.fontFamily.main};
    transition: .5s;
    margin-bottom: 3vh;
  }
`;