import styled from 'styled-components';

interface IMenu {
    menuColor: boolean
}

export const menu = styled.nav<IMenu>`
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 10;
    background: ${props => props.menuColor ?  props.theme.background.backgroundSecondary : 'transparent'};
    flex-direction: row;
    padding: 2rem 8rem;
    align-items: center; 
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: row;
        align-items: center; 
        gap:1rem;
    }
`;