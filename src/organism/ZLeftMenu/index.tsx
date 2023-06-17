import { ZButtonLeftMenu } from '../../atom/ZButtonLeftMenu'
import * as S from './styles'

import { LeftMenuType } from '../../context/LeftMenuTypes.ts'

import { useLeftMenu } from '../../context/LeftMenuContext'

export function ZLeftMenu(): JSX.Element {
    const leftMenuItems: LeftMenuType[] | null = useLeftMenu()

    let menuList = null

    if (leftMenuItems) {
        menuList = leftMenuItems.map((item: LeftMenuType, index: number) => {
            return (
                <ZButtonLeftMenu
                    key={index}
                    Icon={item.Icon}
                    label={item.label}
                    isSelected={item.isSelected}
                />
            )
        })
    }

    console.log('leftMenuItems', leftMenuItems)
    console.log('menuList', menuList)

    return (
        <S.Wrapper>
            <S.Sidebar>{menuList}</S.Sidebar>
        </S.Wrapper>
    )
}
