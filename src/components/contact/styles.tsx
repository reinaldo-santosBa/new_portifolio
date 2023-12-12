import styled from 'styled-components';

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin: 10rem 0;
    padding: 0 8rem;
    h1{
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
    }
    form{
        width: 100%;
        max-width: 80rem;
        margin: 0 auto;
        position: relative;
        div{
            display: flex;
            gap:2rem;
            margin-bottom: 2rem;
            @media (max-width: 768px) {
                flex-direction: column;
            }
            .areaInput{
                display:flex;
                flex-direction: column;
                flex:1;

                input,textArea{
                    background: transparent;
                    outline: none;
                    border: none;
                    flex: 1;
                    color:${props => props.theme.fonts.fontSecondary};
                    font-size: 1.5rem;
                    font-family:  ${(props) => props.theme.fontFamily.main};
                    padding: 1rem;
                    resize: none;
                }
                textArea{
                    border: 1px solid ${props => props.theme.fonts.fontSecondary};
                    border-radius: .1rem;
                    min-height: 10rem;
                }
                input{
                    border-bottom: 1px solid ${props => props.theme.fonts.fontSecondary};
                }
                span{
                    color: red;
                    font-size: 1.6rem;
                }
            }
        }
        input[type=submit]{
            position: absolute;
            outline: none;
            border: none;
            height: 5rem;
            width: 20rem;
            background: ${props => props.theme.button.primary};
            color: ${(props) => props.theme.button.colorFontPrimary};
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 700;
            right: 50%;
            transform: translate(50%,0 )
        }
    }
`;
