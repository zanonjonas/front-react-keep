import { ZButtonLeftMenu } from '../../atom/ZButtonLeftMenu'
import * as S from './styles'

import { LeftMenuType } from '../../context/LeftMenuTypes.ts'

import { useLeftMenu } from '../../context/LeftMenuContext'

const leftMenuItems: LeftMenuType[] | null = useLeftMenu()

let menuList = null

if (leftMenuItems) {
    menuList = leftMenuItems.map((item: LeftMenuType, index: number) => (
        <ZButtonLeftMenu
            Id={index.toString()}
            Icon={item.icon}
            Text={item.label}
        />
    ))
}

export function ZLeftMenu(): JSX.Element {
    return (
        <S.Wrapper>
            <S.Sidebar></S.Sidebar>
        </S.Wrapper>
    )
}
