import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IMenu {
    menuColor: boolean
}
interface IMenuMob {
    positionLeft: number
}

export const menu = styled.nav<IMenu>`
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 10;
    background: ${props => props.menuColor ? props.theme.background.backgroundSecondary : 'transparent'};
    flex-direction: row;
    padding: 2rem 8rem;
    align-items: center; 
    justify-content: space-between;
    @media (max-width: 800px) {
        display: none;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center; 
        gap:1rem;
    }
`;
export const menuMobile = styled.nav<IMenuMob>`
    display: none;
    @media (max-width: 800px) {
        display: block;
        padding: 2rem  0 0 2rem;
        position: absolute;
        top: 0;
        left: ${props => props.positionLeft}px;
        background: ${props => props.theme.background.backgroundSecondary};
        z-index: 100;
        width: 100vw;
        height: 100vh;
        gap: 1rem;
        transition: 1s;
    }
`;

export const icon = styled(FontAwesomeIcon)`
    display: none;
    font-size: 2rem;
    margin: 2rem;
    @media (max-width: 800px) {
        display: block;
    }
`;
