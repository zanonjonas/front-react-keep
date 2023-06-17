import styled from 'styled-components/macro'

export const Wrap = styled.div`
    background-color: #ffffff;
    height: 65px;
    padding: 8px;
    pointer-events: none;
`

export const MenuButton = styled.button<{ IsSelected: boolean }>`
    width: 48px;
    height: 48px;

    border-radius: 50%;
    border: none;
    justify-content: end;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 17px;
    background-color: ${(props) => (props.IsSelected ? 'red' : '#ffffff')};

    &:hover {
        background-color: var(--gray-100);
        cursor: pointer;
    }

    &:focus {
        background-color: red;
    }
`

export const ButtonWrap = styled.div`
    width: auto;
    justify-items: center;
`

export const Divteste = styled.div`
    display: flex;
    align-items: center;
    pointer-events: none;
    gap: 10px;
`
export const Text = styled.span`
    display: none;
    font-weight: 500;
    pointer-events: none;
`
