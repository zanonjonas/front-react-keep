import { ZButton } from '../../atom/ZButton'
import * as S from './styles'
import { MdOutlineSearch, MdClose } from 'react-icons/md'

export function ZSearchBar(): JSX.Element {
    return (
        <>
            <S.SearchInputWrap>
                <ZButton
                    Icon={MdOutlineSearch}
                    backgroundcolor="rgba(0,0,0,0)"
                />
                <S.SearchInput placeholder="Search" />
                <ZButton Icon={MdClose} backgroundcolor="rgba(0,0,0,0)" />
            </S.SearchInputWrap>
        </>
    )
}
