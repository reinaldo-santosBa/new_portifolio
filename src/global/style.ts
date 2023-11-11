import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    /* Remove default margin */
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

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img {
    max-width: 100%;
    display: block;
    }

    /* Natural flow and rhythm in articles by default */
    article > * + * {
    margin-top: 1em;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }
  body {
    background-color: ${(props) => props.theme.background.backgroundPrimary};
    color: ${(props) => props.theme.fonts.fontPrimary};
    font-family:  ${(props) => props.theme.fontFamily.main};
    transition: .5s;
    height: 200vh;
  }
`;