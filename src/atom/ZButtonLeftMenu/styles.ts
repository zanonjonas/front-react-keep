import styled from 'styled-components/macro'

export const Wrap = styled.div`
    background-color: #ffffff;
    height: 65px;
    padding: 8px;
`

export const MenuButton = styled.button`
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

    &:hover {
        background-color: var(--gray-100);
        cursor: pointer;
    }

    &:focus {
        background-color: red;
    }

    &:blur {
        background-color: red;
    }
`

export const ButtonWrap = styled.div`
    width: auto;
    justify-items: center;
`
export const Text = styled.span`
    display: none;
    font-weight: 500;
`
