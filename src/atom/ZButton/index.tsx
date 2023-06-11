import { ComponentType } from 'react'
import { ButtonWrap, MenuButton } from './styles'
// import { IconType } from 'react-icons'

// type IconProps = { }

type ButtonProps = {
    Icon: ComponentType
}

export function ZButton({ Icon }: ButtonProps): JSX.Element {
    //export function ZButton({ icon: Icon }: { icon: IconType }): JSX.Element {
    return (
        <>
            <ButtonWrap>
                <MenuButton>
                    <Icon />
                </MenuButton>
            </ButtonWrap>
        </>
    )
}
