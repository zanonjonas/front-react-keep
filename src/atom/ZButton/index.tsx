import { ButtonWrap, MenuButton, Wrap } from './styles'
import { IconType } from 'react-icons/lib'

export function ZButton(icone: JSX.Element): JSX.Element {
    return (
        <>
            <button>{icone}</button>
        </>
    )
}
