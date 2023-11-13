import styled from 'styled-components';

export const Banner = styled.section`
    display: flex;
    padding: 0 8rem;
    align-items: center;
    justify-content: center;
    flex-wrap wrap:
    width: 100%;
    gap: 2rem;
    height: 100vh;
    div{
        display: flex;
        justify-content: center;
        flex-direction: column ;
        flex: 1;
        height: max-content;
        h1{
            color: ${props => props.theme.fonts.main};
            font-size: 4.8em;
            font-style: normal;
            font-weight: 700;
            line-height: normal;        
        }
        h3{
            color: #828282;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        div{

            img{
                width: 80%;
                padding: 5%;
                background: ${props => props.theme.background.backgroundSecondary};
                border-radius: 50%;
            }
        }
    }
`;

export const AreaBtn = styled.div`
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    margin-top: 3rem;
`;

interface IButton {
    outline?: boolean;
}

export const Button = styled.button<IButton>`
    width: 14rem;
    color: ${props => props.outline ? props.theme.fonts.fontPrimary : props.theme.button.colorFontPrimary};
    height: 4.2rem;
    background: ${props => props.outline ? 'none' : props.theme.button.primary};
    border: .5px solid ${props => props.outline ? props.theme.button.outline : 'transparent'};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 1.4rem;
    border-radius: 1rem;
    cursor: pointer;
`;