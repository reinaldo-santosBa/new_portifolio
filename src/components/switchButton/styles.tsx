import styled from 'styled-components';

export const AreaSwitch = styled.div`
    background: ${(props) => props.theme.background.backgroundSecondary};
    height: 1.5rem;
    cursor: pointer;
    width: 3rem;
    margin: 0 0.5rem;
    display: flex;
    padding: 0 .5rem;
    position: relative;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    div {
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        background: ${(props) => props.theme.fonts.fontPrimary};
        transition: .5s;
    }
    .light{
        left: 0;
    }
    .dark {
        left: 2.5rem;
    }
`;