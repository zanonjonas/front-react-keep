import { ComponentType, useEffect, useRef, useState, MouseEvent } from 'react'
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
    const containerRef = useRef<HTMLInputElement>(null)
    const [IsSelected, SetIsSelected] = useState(false)

    const onClick = () => {
        SetIsSelected(!IsSelected)
    }

    const handleClickOutside = (event: Event) => {
        const e = event.target as HTMLInputElement

        const isButton = e.className.includes('MenuButton')
        console.log(isButton)
        if (
            containerRef.current &&
            !containerRef.current.contains(e) &&
            isButton
        ) {
            SetIsSelected(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <>
            <S.ButtonWrap ref={containerRef}>
                <S.MenuButton id={Id} onClick={onClick} IsSelected={IsSelected}>
                    <IconContext.Provider value={{ size: '22' }}>
                        <>
                            <S.Divteste>
                                <Icon />
                                <S.Text>{Text}</S.Text>
                            </S.Divteste>
                        </>
                    </IconContext.Provider>
                </S.MenuButton>
            </S.ButtonWrap>
        </>
    )
}
