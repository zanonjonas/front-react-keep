import { createContext, useContext, useReducer } from 'react'

import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

import { LeftMenuActionType, LeftMenuListType } from './LeftMenuTypes'

export function LeftMenuProvider({ children }: { children: JSX.Element }) {
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

export function useTasks() {
    return useContext(LeftMenuContext)
}

export function useTasksDispatch() {
    return useContext(LeftMenuDispatchContext)
}

const initialLeftMenuList: LeftMenuListType = [
    { label: 'Notas', isSelected: false, icon: AiOutlineBulb },
    { label: 'Lembretes', isSelected: false, icon: AiOutlineBell },
    { label: 'Editar', isSelected: false, icon: BiPencil },
]

const LeftMenuContext = createContext<LeftMenuListType | null>(null)
const LeftMenuDispatchContext =
    createContext<React.Dispatch<LeftMenuActionType> | null>(null)

function leftMenuReducer(
    menuItemList: LeftMenuListType,
    action: LeftMenuActionType
): LeftMenuListType {
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
