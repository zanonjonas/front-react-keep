import styled from 'styled-components/macro'

type LeftMenuStyleProps = {
    isSelected: boolean;
}



export const Wrap = styled.div`
    background-color: #ffffff;
    height: 65px;
    padding: 8px;
`

export const MenuButton = styled.button<LeftMenuStyleProps>`
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 50%;
    border: none;
    justify-content: end;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 17px;
    ${props => props.isSelected ? 'background-color: purple;' : 'background-color: white;'}

    &:hover {
        ${props => (!props.isSelected) && ('background-color: pink;')}
        cursor: pointer;
    }

    &:blur {
        background-color: red;
    }
`

export const ButtonWrap = styled.div`
    width: auto;
    justify-items: center;
`
export const Label = styled.span`
    display: none;
    font-weight: 500;
`
