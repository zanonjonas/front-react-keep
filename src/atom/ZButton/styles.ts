import { styled } from 'styled-components'

export const Wrap = styled.div`
    background-color: #ffffff;
    height: 65px;
    padding: 8px;
`

type ButtonProps = {
    backgroundcolor?: string
}

export const Button = styled.button<ButtonProps>`
    width: 48px;
    height: 48px;
    background-color: ${ (props) => (props.backgroundcolor === undefined) ? 'var(--white)' : props.backgroundcolor };
    border-radius: 50%;
    border: none;
    

    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`

export const ButtonWrap = styled.div`
    width: auto;
    justify-items: center;
`
