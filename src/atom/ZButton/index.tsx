import { ComponentType } from 'react'
import * as S from './styles'
import { IconContext } from 'react-icons'

// FYI (1): Outro jeito de fazer...
// import { IconType } from 'react-icons'
//type IconProps = {}

type ButtonProps = {
    Icon: ComponentType
    backgroundcolor?: string
}

export function ZButton({ Icon, backgroundcolor }: ButtonProps): JSX.Element {
    // FYI (1): Outro jeito de fazer...
    //export function ZButton({ icon: Icon }: { icon: IconType }): JSX.Element {
    return (
        <>
            <S.ButtonWrap>
                <S.Button backgroundcolor={backgroundcolor}>
                    <IconContext.Provider value={{ size: '24' }}>
                        <Icon />
                    </IconContext.Provider>
                </S.Button>
            </S.ButtonWrap>
        </>
    )
}
