import styled from 'styled-components';

export const About = styled.section`
    display: flex;
    padding: 0 8rem;
    align-items: center;
    justify-content: center;
    flex-wrap wrap:
    width: 100vw;
    gap: 2rem;
    height: 100vh;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100%;
        div{

            img{
                padding: 5%;
                background: ${props => props.theme.background.backgroundSecondary};
                border-radius: 50%;
            }
        }
    }
`;