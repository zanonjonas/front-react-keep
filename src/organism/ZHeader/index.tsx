import { ZButton } from '../../atom/ZButton'
import * as S from './styles'
import { FaBars } from 'react-icons/fa'

export function ZHeader(): JSX.Element {
    return (
        <>
            <S.ZWrap>
                <S.ZLeftHeaderWrap>
                    <ZButton Icon={FaBars} />
                    <S.ZLogo src="src\assets\cute.icon.png" />
                    <p>Keep</p>
                    <div>barra de pesquisa</div>
                </S.ZLeftHeaderWrap>
                <S.ZRightHeaderWrap>
                    <ZButton Icon={FaBars} />
                    <ZButton Icon={FaBars} />
                    <ZButton Icon={FaBars} />
                </S.ZRightHeaderWrap>
            </S.ZWrap>
        </>
    )
}
