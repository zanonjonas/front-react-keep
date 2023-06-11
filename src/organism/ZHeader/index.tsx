import { ZButton } from '../../atom/ZButton'
import { Wrap } from './styles'
import { FaBars } from 'react-icons/fa'

export function ZHeader(): JSX.Element {
    return (
        <>
            <Wrap>
                <ZButton icone={FaBars} />
            </Wrap>
        </>
    )
}
