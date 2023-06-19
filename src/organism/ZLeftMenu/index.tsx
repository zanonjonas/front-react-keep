import { useState } from 'react'
import { ZButtonLeftMenu } from '../../atom/ZButtonLeftMenu'
import * as S from './styles'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

const mockButtons = [
    { id: 1, texto: 'Notas', Icon: AiOutlineBulb, isSelected: false },
    { id: 2, texto: 'Lembretes', Icon: AiOutlineBell, isSelected: false },
    { id: 3, texto: 'Editar', Icon: BiPencil, isSelected: false },
]

export function ZLeftMenu(): JSX.Element {
    const [buttons, Setbuttons] = useState([
        { id: 1, texto: 'Notas', Icon: AiOutlineBulb, isSelected: false },
        { id: 2, texto: 'Lembretes', Icon: AiOutlineBell, isSelected: false },
        { id: 3, texto: 'Editar', Icon: BiPencil, isSelected: false },
    ])

    const onClick = (index: number) => {
        Setbuttons((current) =>
            current.map((b, ix) => ({
                ...b,
                isSelected: ix === index ? true : false,
            }))
        )
    }
    return (
        <S.Wrapper>
            <S.Sidebar>
                <button
                    onClick={() => {
                        console.log(buttons)
                    }}
                ></button>
                {buttons.map((button, index) => (
                    <ZButtonLeftMenu
                        data-close
                        Id={button.id}
                        Icon={button.Icon}
                        Text={button.texto}
                        isSelected={button.isSelected}
                        fonClick={onClick}
                        findex={index}
                    />
                ))}
            </S.Sidebar>
        </S.Wrapper>
    )
}
