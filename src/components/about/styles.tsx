import styled from 'styled-components';

export const About = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin: 3rem 0;
    padding: 0 8rem;
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
    }
    div{
        display: flex;
        justify-content: space-evenly;
    }
`;