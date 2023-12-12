import styled from 'styled-components';

export const Skills = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin: 10rem 0;
    padding: 0 8rem;
    @media (max-width: 800px) {
        margin: 1rem 0;
        padding: 0 2rem;
    }
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
        @media (max-width: 1024px) {
            display:grid;
            grid-template-columns: 2fr 2fr;
            padding: 1rem;
        }
        @media (max-width: 800px) {
            display:flex;
            flex-direction: column;
            padding: 1rem;
        }
    }
`;
