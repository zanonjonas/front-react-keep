import { ZButton } from '../../atom/ZButton'
import { ZSearchBar } from '../../molecule/ZSearchBar'
import * as S from './styles'
import {
    MdMenu,
    MdRefresh,
    MdViewAgenda,
    MdSettings,
    MdPersonPin,
} from 'react-icons/md'

export function ZHeader(): JSX.Element {
    return (
        <>
            <S.Wrap>
                <S.LeftHeaderWrap>
                    <ZButton Icon={MdMenu} />
                    <S.Logo src="src\assets\cute.icon.png" />
                    <S.LogoFont>Keep</S.LogoFont>
                </S.LeftHeaderWrap>
                <S.MiddleHeaderWrap>
                    <ZSearchBar></ZSearchBar>
                    <S.ButtonsWrap>
                        <ZButton Icon={MdRefresh} />
                        <ZButton Icon={MdViewAgenda} />
                        <ZButton Icon={MdSettings} />
                    </S.ButtonsWrap>
                </S.MiddleHeaderWrap>
                <S.RightHeaderWrap>
                    <ZButton Icon={MdPersonPin} />
                </S.RightHeaderWrap>
            </S.Wrap>
        </>
    )
}
