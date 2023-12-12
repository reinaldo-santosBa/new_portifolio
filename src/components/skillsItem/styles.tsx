import styled from 'styled-components';

export const SkillsItem = styled.div`
    display: block !important;
    justify-content: center;
    align-items: center
    flex:1;
    padding: 0 8rem;
    h2{
        color: ${props => props.theme.fonts.fontSecondary};
        text-align: center;
        font-size: 7.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h4{
        color: ${props => props.theme.button.primary};
        text-align: center;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        background: ${props => props.theme.background.backgroundSecondary};
        gap: 2rem;
        border-radius: 1rem;
        padding: 2rem;
    }
`;
