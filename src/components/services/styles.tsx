import styled from 'styled-components';

export const Service = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin: 10rem 0;
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
    }
    div{
        
        display: flex;
        justify-content: space-evenly;
        gap: 2rem;
        border-radius: 1rem;
        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
        }
    }
`;

export const Icon = styled.svg`
    font-size: 3rem;
    path{
        fill: ${props => props.theme.button.primary};
    }
`;
