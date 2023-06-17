import { IconType } from 'react-icons'

export type LeftMenuActionPayloadType = {
  label: string
}

export type LeftMenuActionType = {
  type: 'select'
  payload: LeftMenuActionPayloadType
}

export type LeftMenuType = {
  label: string
  isSelected: boolean
  Icon: IconType
}