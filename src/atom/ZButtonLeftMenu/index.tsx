import { ComponentType, MouseEvent } from 'react'
import * as S from './styles'
import { IconContext } from 'react-icons'
// import { IconType } from 'react-icons'

//type IconProps = {}

type ButtonProps = {
    Icon: ComponentType
    Text: string
    Id: string
}

export function ZButtonLeftMenu({ Icon, Text, Id }: ButtonProps): JSX.Element {
    //export function ZButton({ icon: Icon }: { icon: IconType }): JSX.Element {
    // const []

    const onMenuClick = (e: MouseEvent, Id: string) => {
        document.getElementById(Id)?.focus()
    }

    return (
        <>
            <S.ButtonWrap>
                <S.MenuButton
                    id={Id}
                    onClick={(e: MouseEvent) => onMenuClick(e, Id)}
                >
                    <IconContext.Provider
                        value={{ className: 'shared-class', size: '22' }}
                    >
                        <>
                            <Icon />
                            <S.Text>{Text}</S.Text>
                        </>
                    </IconContext.Provider>
                </S.MenuButton>
            </S.ButtonWrap>
        </>
    )
}
