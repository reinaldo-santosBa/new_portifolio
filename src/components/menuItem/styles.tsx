import styled from 'styled-components';

export const title = styled.p`
    color: ${(props) => props.theme.fonts.fontPrimary};
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer
`;