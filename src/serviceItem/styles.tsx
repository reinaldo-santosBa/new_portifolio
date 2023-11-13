import styled from 'styled-components';

export const ServiceItemArea = styled.div`
    flex: 1;
    display: block;
    flex-direction: column;
    padding: 3rem;
    border-radius: 2rem;
    background: ${props => props.theme.background.backgroundSecondary};
    p{
        color: ${props => props.theme.fonts.fontSecondary};
        font-size: 4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 100%;
        text-align: start;
    }
`;
