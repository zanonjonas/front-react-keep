import styled from 'styled-components/macro'
import * as S from '../../atom/ZButtonLeftMenu/styles.ts'

export const Wrapper = styled.div`
    width: 250px;
    height: 1000px;
`

export const Sidebar = styled.div`
    width: 30%;
    height: 100%;
    background-color: var(--white);
    transition: all 10ms ease;
    display: flex;
    flex-direction: column;

    &:hover {
        //background-color: var(--white);
        width: 100%;
        height: 100%;
        box-shadow: 2px 10px 10px 2px var(--gray-300);
        margin-left: 0px;
        padding-left: 0px;

        transition: all 10ms ease;
        transform: scale(1);

        &:hover ${S.MenuButton} {
            cursor: pointer;
            width: 250px;
            border-radius: 0px 40px 40px 0px;
            justify-content: start;
            padding-left: 30px;
            gap: 25px;
            margin-left: 0px;

            transition: all 10ms linear;
        }

        &:hover ${S.Text} {
            justify-content: center;
            display: contents;
        }
    }
`
