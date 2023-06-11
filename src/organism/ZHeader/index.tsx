import { ZButton } from '../../atom/ZButton'
import { LeftHeader, RightHeader, Wrap } from './styles'
import { FaBars } from 'react-icons/fa'

export function ZHeader(): JSX.Element {
    return (
        <>
            <Wrap>
                <LeftHeader>
                    <ZButton Icon={FaBars} />
                    <img src="src\assets\cute.icon.png" />
                    <p>Keep</p>
                    <div>barra de pesquisa</div>
                </LeftHeader>
                <RightHeader>
                    <ZButton Icon={FaBars} />
                    <ZButton Icon={FaBars} />
                    <ZButton Icon={FaBars} />
                </RightHeader>
            </Wrap>
        </>
    )
}
