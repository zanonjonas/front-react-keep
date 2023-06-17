import { ComponentType } from 'react'
import * as S from './styles'
import { IconContext } from 'react-icons'

import { useLeftMenuDispatch } from '../../context/LeftMenuContext'

type ButtonProps = {
    label: string
    Icon: ComponentType
    isSelected: boolean
}

export function ZButtonLeftMenu({
    label,
    Icon,
    isSelected,
}: ButtonProps): JSX.Element {
    const leftMenuDispatch = useLeftMenuDispatch()

    function onMenuClick(): void {
        leftMenuDispatch?.({ payload: { label: label }, type: 'select' })
    }

    return (
        <>
            <S.ButtonWrap>
                <S.MenuButton isSelected={isSelected} onClick={onMenuClick}>
                    <IconContext.Provider value={{ size: '22' }}>
                        <Icon />
                        <S.Label>{label}</S.Label>
                    </IconContext.Provider>
                </S.MenuButton>
            </S.ButtonWrap>
        </>
    )
}
