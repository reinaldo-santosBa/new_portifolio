import styled from 'styled-components';

export const title = styled.a`
    color: ${(props) => props.theme.fonts.fontPrimary};
    font-family: ${(props) => props.theme.fontFamily.title};
    font-size: 1.6rem;
    text-decoration: none;
`;