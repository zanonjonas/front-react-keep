import { ZButton } from '../../atom/ZButton'
import { Wrap } from './styles'
import { FaBars, FaApple, FaAndroid, FaBitcoin } from 'react-icons/fa'

export function ZHeader(): JSX.Element {
    return (
        <>
            <Wrap>
                <ZButton Icon={FaBars} />
                <ZButton Icon={FaApple} />
                <ZButton Icon={FaAndroid} />
                <ZButton Icon={FaBitcoin} />
            </Wrap>
        </>
    )
}
