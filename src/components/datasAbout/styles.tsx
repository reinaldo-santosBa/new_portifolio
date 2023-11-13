import styled from 'styled-components';

export const AreaCircle = styled.div`
    background: ${(props) => props.theme.background.backgroundPrimary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    .circleOut {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme.background.backgroundSecondary};
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        .circleIn {
            background: ${(props) => props.theme.button.primary};
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }
`;