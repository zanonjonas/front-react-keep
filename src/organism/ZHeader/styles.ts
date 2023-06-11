import styled from 'styled-components'

export const Wrap = styled.div`
    background-color: var(--white);
    padding: 8px;
    display: flex;
    justify-content: space-between;
`

export const MenuButton = styled.button`
    width: 48px;
    height: 48px;
    background-color: var(--white);
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

export const LeftHeader = styled.div`
    background-color: var(--white);
    height: 65px;
    padding: 8px;
    display: flex;
`

export const RightHeader = styled.div`
    background-color: var(--white);
    display: flex;
`
