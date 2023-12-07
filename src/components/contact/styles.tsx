import styled from 'styled-components';

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin: 10rem 0;
    padding: 0 8rem;
    h1{
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        background: ${props => props.theme.background.backgroundSecondary};
        gap: 2rem;
        border-radius: 1rem;
        padding: 3rem;
    }
`;
