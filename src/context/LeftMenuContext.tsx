import { createContext, useContext, useReducer } from 'react'

import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

import { LeftMenuActionType, LeftMenuType } from './LeftMenuTypes'

export function LeftMenuProvider({ children }: { children: JSX.Element[] }) {
    const [menuItemList, dispatch] = useReducer(
        leftMenuReducer,
        initialLeftMenuList
    )

    return (
        <LeftMenuContext.Provider value={menuItemList}>
            <LeftMenuDispatchContext.Provider value={dispatch}>
                {children}
            </LeftMenuDispatchContext.Provider>
        </LeftMenuContext.Provider>
    )
}

export function useLeftMenu() {
    return useContext(LeftMenuContext)
}

export function useLeftMenuDispatch() {
    return useContext(LeftMenuDispatchContext)
}

const initialLeftMenuList: LeftMenuType[] = [
    { label: 'Notas', isSelected: false, Icon: AiOutlineBulb },
    { label: 'Lembretes', isSelected: false, Icon: AiOutlineBell },
    { label: 'Editar', isSelected: false, Icon: BiPencil },
]

const LeftMenuContext = createContext<LeftMenuType[] | null>(null)
const LeftMenuDispatchContext =
    createContext<React.Dispatch<LeftMenuActionType> | null>(null)

function leftMenuReducer(
    menuItemList: LeftMenuType[],
    action: LeftMenuActionType
): LeftMenuType[] {
    switch (action.type) {
        case 'select': {
            return menuItemList.map((item) =>
                item.label === action.payload.label
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            )
        }

        default: {
            throw new Error('Unknown action: ' + action.type)
        }
    }
}
