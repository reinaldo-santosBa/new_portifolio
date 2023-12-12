import styled from 'styled-components';

export const About = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin: 3rem 0;
    padding: 0 8rem;
    @media (max-width: 800px) {
        padding: 0 2rem;
    }
    h1{
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
    }
    p{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 800px) {
            text-align: justify;
        }
    }
    div{
        display: flex;
        justify-content: space-evenly;
        @media (max-width: 800px) {
            flex-direction: column;
        }
    }
`;