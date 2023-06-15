import { ComponentType } from 'react'
import * as S from './styles'
import { IconContext } from 'react-icons'
// import { IconType } from 'react-icons'

//type IconProps = {}

type ButtonProps = {
    Icon: ComponentType
}

export function ZButton({ Icon }: ButtonProps): JSX.Element {
    //export function ZButton({ icon: Icon }: { icon: IconType }): JSX.Element {
    return (
        <>
            <S.ButtonWrap>
                <S.MenuButton>
                    <IconContext.Provider
                        value={{ className: 'shared-class', size: '22' }}
                    >
                        <>
                            <Icon />
                        </>
                    </IconContext.Provider>
                </S.MenuButton>
            </S.ButtonWrap>
        </>
    )
}
