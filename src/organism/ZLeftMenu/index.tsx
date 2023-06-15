import { ZButtonLeftMenu } from '../../atom/ZButtonLeftMenu'
import * as S from './styles'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

export function ZLeftMenu(): JSX.Element {
    return (
        <S.Wrapper>
            <S.Sidebar>
                <ZButtonLeftMenu
                    Id="teste1"
                    Icon={AiOutlineBulb}
                    Text={'Notas'}
                />
                <ZButtonLeftMenu
                    Id="teste2"
                    Icon={AiOutlineBell}
                    Text={'Lembretes'}
                />
                <ZButtonLeftMenu Id="teste3" Icon={BiPencil} Text={'Editar'} />
            </S.Sidebar>
        </S.Wrapper>
    )
}
