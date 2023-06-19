import { ComponentType } from 'react'
import * as S from './styles'
import { IconContext } from 'react-icons'

type ButtonProps = {
    Icon: ComponentType
    Text: string
    Id: Number
    isSelected: boolean
    fonClick: (index: number) => void
    findex: number
}

export function ZButtonLeftMenu({
    Icon,
    Text,
    Id,
    fonClick,
    isSelected,
    findex,
}: ButtonProps): JSX.Element {
    return (
        <>
            <S.ButtonWrap>
                <S.MenuButton
                    onClick={() => {
                        fonClick(findex)
                    }}
                    isSelected={isSelected}
                >
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
